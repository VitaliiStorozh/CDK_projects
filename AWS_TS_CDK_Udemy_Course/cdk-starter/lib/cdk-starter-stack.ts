import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { CfnOutput, Duration, Stack } from 'aws-cdk-lib';

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    new Bucket(this, 'L3Bucket', {
      // bucketName: 'my-temp-bucket',
      lifecycleRules: [
        {
          expiration: Duration.days(expiration),
        },
      ],
    });
  }
}

export class CdkStarterStack extends Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a S3 bucket in 3 ways:
    new CfnBucket(this, 'MyL1Bucket', {
      // bucketName: 'my-temp-bucket',
      lifecycleConfiguration: {
        rules: [
          {
            expirationInDays: 1,
            status: 'Enabled',
          },
        ],
      },
    });

    const myL2Bucket = new Bucket(this, 'MyL2Bucket', {
      // bucketName: 'my-temp-bucket',
      lifecycleRules: [
        {
          expiration: Duration.days(2),
        },
      ],
    });

    new CfnOutput(this, 'MyL2BucketName', {
      value: myL2Bucket.bucketName,
    });

    new L3Bucket(this, 'MyL3Bucket', 3);
  }
}
