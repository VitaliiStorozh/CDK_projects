# cdk commands:

# Init CDK environment in AWS account
cdk bootstrap

# Init new CDK application
cdk init app --language typescript

# Emits the synthesized CloudFormation template
cdk synth

# Deploy this stack to your default AWS account/region
cdk deploy
cdk deploy --all # Deploy all existing stacks in project
cdk deploy MyStack # Deploy specific stack

# Show list of stacks in project
cdk list

# Compare deployed stack with current state
cdk diff

# Delete deployed resources
cdk destroy
cdk destroy --all
cdk destroy MyStack

# Use deploy with parameters

cdk deploy --parameters 
cdk deploy --parameters duration=2

# Fix issues

cdk deploy --exclusively service
cdk deploy --exclusively rds

