import { aws_imagebuilder, Stack, StackProps } from "aws-cdk-lib";
import * as elbv2 from "aws-cdk-lib/aws-elasticloadbalancingv2";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import * as ecs from "aws-cdk-lib/aws-ecs";
import { DockerImageAsset } from "aws-cdk-lib/aws-ecr-assets";
import { join } from "path";
import { ApiGateway } from "aws-cdk-lib/aws-events-targets";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const vpc = new ec2.Vpc(this, "warehouse-vpc", { maxAzs: 2 });

    let cluster = new ecs.Cluster(this, "warehouse-cluster", { vpc: vpc });
    cluster.addCapacity("warehouse-cluster-capacity", {
      desiredCapacity: 1,
      machineImage: ecs.EcsOptimizedImage.amazonLinux2(),
      instanceType: new ec2.InstanceType("t2.micro"),
    });
    let serverTask = new ecs.TaskDefinition(this, "warehouse-server", {
      compatibility: ecs.Compatibility.EC2,
    });
    const serverImage = new DockerImageAsset(this, "warehouse-server-image", {
      directory: join(__dirname, "../", "apps", "server"),
      file: join("docker", "server.dockerfile"),
    });
    serverTask.addContainer("warehouse-server-container", {
      image: ecs.ContainerImage.fromDockerImageAsset(serverImage),
    });
    let serverService = new ecs.Ec2Service(this, "warehouse-server-service", {
      cluster: cluster,
      taskDefinition: serverTask,
      desiredCount: 1,
    });
    let lb = new elbv2.ApplicationLoadBalancer(this, "warehouse-server-lb", {
      vpc,
      internetFacing: true,
      ipAddressType: elbv2.IpAddressType.IPV4,
    });
    let tg = new elbv2.ApplicationTargetGroup(this, "warehouse-server-tg");
    tg.addTarget(serverService);
    const cert = new Certificate(this, "warehouse-cert", {
      domainName: "warehouse.kadencartwright.com",
      validation: CertificateValidation.fromDns(),
    });
    lb.addListener("warehouse-lb-listener", {
      defaultTargetGroups: [tg],
      protocol: elbv2.ApplicationProtocol.HTTPS,
      certificates: [],
    });
  }
}
