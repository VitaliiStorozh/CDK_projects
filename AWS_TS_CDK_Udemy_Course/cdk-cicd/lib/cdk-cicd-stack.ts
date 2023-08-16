import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {CodeBuildStep, CodePipeline, CodePipelineSource, ShellStep} from "aws-cdk-lib/pipelines";
import {PipelineStage} from "./PipelineStage";

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyServicePipeline',
        synth: new ShellStep('Synth', {
            input: CodePipelineSource.gitHub('VitaliiStorozh/CDK_projects', 'main'),
            commands: [
                'cd AWS_TS_CDK_Udemy_Course/cdk-cicd',
                'npm ci',
                'npx cdk synth'
            ],
          primaryOutputDirectory: 'AWS_TS_CDK_Udemy_Course/cdk-cicd/cdk.out',
        }),
    })
      const testStage = pipeline.addStage(new PipelineStage(this, 'PipelineTestStage', {
            stageName: 'Test'
      }));

        testStage.addPre(new CodeBuildStep('unit-tests', {
            commands: [
                'cd cdk-cicd',
                'npm ci',
                'npm run test'
            ],
        }));
  }
}
