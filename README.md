1. **_Introduction to AWS CDK_**

   > https://github.com/SwiftNextStep/aws-cdk-simple-app

2. **_Initial Environment setup to use the CDK, appendix section and checking for node_**

   > https://nodejs.org/en/

3. **_Installing the AWS CLI and configuring it_**

   > https://aws.amazon.com/cli/

4. **_Installing the AWS CDK (Cloud Development Kit)_**

   > https://docs.aws.amazon.com/cdk/

   > npm install -g aws-cdk

5. **_First simple application_**

   > https://github.com/SwiftNextStep/aws-cdk-simple-app

   > cdk init - // Check availiable options

   > cdk init app --language=typescript

6. **_Documentations_**

   > cdk docs

7. **_Install bootstrap_**

   > cdk bootstrap

8. **_Emits the synthesized CloudFormation template_**

   > cdk synth -o ./templates

9. **_Deploy this stack to your default AWS account/region_**

   > cdk deploy

10. **_Compare deployed stack with current state_**

    > cdk diff

11. **_Show list of stacks in project_**

    > cdk list

12. **_Delete deployed resources_**

    > cdk destroy

13. **_Check some helthses_**

    > cdk doctor

14. **_Use deploy with parameters_**

    > cdk deploy --parameters duration=2

15. **_Save outputs from stack to file_**

    > cdk deploy --all --outputs-file outputs.json

16. **_Clean context_**

    > cdk context --clear

17. **_Create project from scratch_**

    > mkdir name_of_project
    > cd name_of_project
    > npm init -y
    > npm install -D aws-cdk aws-cdk-lib constructs typescript ts-node @types/node
