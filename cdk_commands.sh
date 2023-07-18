 # cdk commands:

# Init CDK environment in AWS account
cdk bootstrap

# Init new CDK application
cdk init app --language typescript

# Emits the synthesized CloudFormation template
cdk synth

# Show list of stacks in project
cdk list

# Deploy this stack to your default AWS account/region
cdk deploy
cdk deploy --all # Deploy all existing stacks in project
cdk deploy MyStack # Deploy specific stack

# Save outputs from stack to file
cdk deploy --all --outputs-file outputs.json

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

# Create project from scratch

mkdir name_of_project
cd name_of_project
npm init -y
# -D means that we install it as a dev dependency
npm install -D aws-cdk aws-cdk-lib constructs typescript ts-node @types/node
mkdir src
mkdir src/infra
touch src/infra/Launcher.ts
mkdir src/infra/stacks
touch src/infra/stacks/DataStack.ts
touch cdk.json
touch tsconfig.json
