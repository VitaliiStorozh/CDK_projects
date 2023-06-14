import * as cdk from 'aws-cdk-lib';
import { Fn, Stack } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PhotosStack extends Stack {
  private stackSufix: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.initializeStackSufix();

    new Bucket(this, 'PhotosBucket', {
      bucketName: `photos-bucket-${this.stackSufix}`,
    });
  }

  private initializeStackSufix() {
    const shortStacId = Fn.select(2, Fn.split('/', this.stackId));
    this.stackSufix = Fn.select(4, Fn.split('-', shortStacId));
  }
}
