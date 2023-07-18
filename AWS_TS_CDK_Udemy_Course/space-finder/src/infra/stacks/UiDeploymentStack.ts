import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import { getSuffixFromStack } from '../Utils';
import { join } from 'path';
import { existsSync } from 'fs';
import { Distribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';

export class UiDeploymentStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const suffix = getSuffixFromStack(this);

    const deploymentBucket = new Bucket(this, 'UiDeploymentBucket', {
      bucketName: `space-finder-ui-deployment-${suffix}`,
    });

    const uiDir = join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'space-finder-frontend',
      'dist'
    );
    if (!existsSync(uiDir)) {
      console.warn('UI directory does not exist');
      return;
    }

    new BucketDeployment(this, 'SpacesFinderDeployment', {
      sources: [Source.asset(uiDir)],
      destinationBucket: deploymentBucket,
    });

    const originIdentity = new OriginAccessIdentity(
      this,
      'OriginAccessIdentity'
    );
    deploymentBucket.grantRead(originIdentity);

    const distribution = new Distribution(this, 'SpacesFinderDistribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new S3Origin(deploymentBucket, {
          originAccessIdentity: originIdentity,
        }),
      },
    });

    new CfnOutput(this, 'SpaceFinderUrl', {
      value: distribution.distributionDomainName,
    });
  }
}
