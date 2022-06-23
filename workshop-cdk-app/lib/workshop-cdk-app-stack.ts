import { Stack, StackProps, aws_route53, CfnOutput, RemovalPolicy, aws_cloudfront, } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { StaticSite } from './static-site/static-site';

export interface StaticSiteProps extends StackProps {
  domainName: string;
  siteSubDomain: string;
}


export class WorkshopCdkAppStack extends Stack {
  constructor(scope: Construct, id: string, props: StaticSiteProps) {
    super(scope, id, props);

    new StaticSite(this, 'WorkshopStaticSite', {
      domainName: props.domainName,
      siteSubDomain: props.siteSubDomain,
  });
   
  }
}
