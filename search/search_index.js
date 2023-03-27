var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"blog/main.html","title":"blogs","text":"<p>This blog section is a place where we can explore a wide range of topics and ideas, from the latest technology trends to tips for self-improvement and personal growth. Whether you're a tech enthusiast, a curious learner, or someone seeking inspiration, there's something for everyone here.</p> <p>{{ blog_content }}</p> <p>Thank you for joining me on this adventure, and I look forward to connecting with you soon!  </p>"},{"location":"blog/rulebook.html","title":"Unlocking the Power of Effective Documentation","text":"<p>Good documentation for a product is like a well-written rulebook in a boardgame - it makes the game easy to understand, enjoyable to play, and accessible to all.</p> <p>Root is a strategy board game that has taken the tabletop world by storm since its release in 2018. Developed by Cole Wehrle and published by Leder Games, Root is a game of woodland might and right that pits players against each other in a battle for control over a richly detailed and immersive woodland kingdom. With its unique asymmetric gameplay, gorgeous artwork, and richly thematic setting, Root is a game that offers endless hours of fun and strategic challenge for players of all skill levels. Whether you're a seasoned tabletop enthusiast or a newcomer to the world of board games, Root is a game that is sure to captivate your imagination and test your strategic abilities to their limits. I can say that Root is a complex game (3.78/5), but a good rulebook makes it easier to learn and start with! You can check more here: BoardGameGeek</p>","tags":["General"]},{"location":"blog/tags.html","title":"List of all blogs","text":"<p>{{ tag_content }}</p>"},{"location":"blog/tf-mars.html","title":"Moving HashiCorp Terraform state file","text":"<p>This isn't a blog about board games, but HashiCorp Terraform makes me think of the Terraforming Mars board game!</p> <p>Terraforming Mars is a board game designed by Jacob Fryxelius and published by FryxGames in 2016. The game is set in the future, where players take on the role of corporations that work together to terraform Mars and make it habitable for human life. You can check more here: BoardGameGeek</p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#terraform-state-file","title":"Terraform state file","text":"<p>Infrastructure as Code (IaC) enables us to use code to manage infrastructure resources. This approach makes it easier to manage complex infrastructures, reduce manual errors, and increase efficiency.</p> <p>These days HashiCorp Terraform is one of the popular IaC tools. It supports a wide range of Cloud providers and services including AWS, Azure, GCP, K8S, and many others. This enables infrastructure engineers to manage their infrastructure resources in a consistent way, regardless of the cloud provider they are using.</p> <p>Terraform provides a state management mechanism to track the state of the infrastructure resources. This allows us to understand the current state of the infrastructure, identify changes that have been made, and easily make updates. Terraform stores the current state of the infrastructure in a file called tfstate. This state is used by Terraform to map real world resources to the configuration, keep track of metadata, and to improve performance for large infrastructures.</p> <p>This state file is stored locally by default in a file called <code>terraform.tfstate</code>. Terraform utilizes the state file to generate plan and carry out modifications to the infrastructure. Terraform performs a refresh before carrying out any action to update the state with the current state of the infrastructure. That\u2019s why we see <code>Refreshing state\u2026</code> in each Terraform plan output.</p> <pre><code>$ terraform plan\naws_dynamodb_table.dynamodb_locktable: Refreshing state... [id=terraforming-mars-locktable]\naws_s3_bucket.s3_tfstate: Refreshing state... [id=terraforming-mars-tfstate]\n</code></pre> <p>You can read more about Terraform state purpose here: Purpose of Terraform State</p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#terraform-backend","title":"Terraform backend","text":"<p>Terraform enables us to collaborate with other members of our team by using version control systems such as Git. This makes it easier to share infrastructure code, review changes, and ensure that everyone is working on the same version of the infrastructure. However, using a local Terraform state file can be challenging because everyone must make sure to pull the latest tfstate file locally and ensure that nobody else is running Terraform at the same time.</p> <p>To solve this issue, Terraform introduces remote state. Using remote state, the state file can be written to a remote data store. Now, teammates can collaborate on a project without any concern about the latest tfstate file version. Remote state is implemented by a backend or by Terraform Cloud.</p> <p>Terraform supports various types of backends, including AWS S3, Azure Blob Storage, and HashiCorp Consul. These backends provide remote storage for Terraform state files, making it easier to manage infrastructure resources across teams and environments. When using a remote backend, Terraform can read the current state and apply changes to the infrastructure based on that state.</p> <p>However, what if Terraform executed concurrently? Terraform has an ability to lock the state file. Whenever there is a possibility of writing state, the process of state locking occurs automatically. Backends are responsible for providing an API for state locking and state locking is optional.</p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#default-backend","title":"Default backend","text":"<p>Terraform uses a backend called <code>local</code> as the default option, which stores the state data locally as a file on the disk. It means that we do not need to add backend block configuration. For example, the below code block shows the terraform block configured with aws provider:</p> <pre><code>terraform {\n  required_providers {\n    aws = {\n      source = \"hashicorp/aws\"\n    }\n  }\n}\n</code></pre> <p>The state file in Terraform is typically stored locally in the current project directory. However, you may wonder how to store the tfstate file in a different location. This can be accomplished by specifying a backend configuration in your Terraform code, which tells Terraform where to store the state file:</p> <pre><code>terraform {\n  required_providers {\n    aws = {\n      source = \"hashicorp/aws\"\n    }\n  }\n  backend \"local\" {\n    path = \"local_path/terraform.tfstate\"\n  }\n}\n</code></pre> <p>By adding the backend configuration block and running <code>terraform init</code>, you will get an error message indicates change in backend configuration:</p> <pre><code>$ terraform init\nInitializing the backend...\nError: Backend configuration changed\n\nA change in the backend configuration has been detected, which may require migrating existing state.\n\nIf you wish to attempt automatic migration of the state, use \"terraform init -migrate-state\".\nIf you wish to store the current configuration with no changes to the state, use \"terraform init -reconfigure\".\n</code></pre> <p>The error message simply explains the root cause and the possible solutions. The <code>-migrate-state</code> option will attempt to copy existing state to the new backend, and depending on what changed, may result in interactive prompts to confirm migration of workspace states. On the other hand, the <code>-reconfigure</code> option disregards any existing configuration, preventing migration of any existing state.  </p> <p>If you are trying to move the state file from the default working directory to your custom directory, <code>-migrate-state</code> is the correct option.</p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#migrating-to-a-remote-backend","title":"Migrating to a remote backend","text":"<p> Now, how can we move the local state file of a current project to a remote backend? As we understood, using a remote backend can help improve collaboration, scalability, security, and ease of management when working with Terraform.</p> <p>I would like to divide the supported backends into two categories: Local and Remote. In the Local group, the state file is stored locally (default or using a local configuration). The Remote group includes options such as Terraform Cloud, AWS S3, Azurerm, and others.</p> <p>HashiCorp says that remote backend is unique among all other Terraform backends. Read more about it here: Terraform Remote Backend</p> <p>In this demonstration, I try to use AWS S3 backend. AWS S3 backend supports state locking via AWS DynamoDB. It means that it doesn\u2019t support state locking out of the box.</p> <p>As an example of an in-the-box locking feature, Azurerm supports state locking and consistency checking with Azure Blob Storage native capabilities.</p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#implementation","title":"Implementation","text":"<p>In the first step, let's create resources an AWS to support storing Terraform project state file and status. Based on a project experience, I have a project called <code>iac-base</code> includes all the base infrastructure for other projects deployment. The below code block shows <code>iac-base</code> resources:  </p> <pre><code># S3 bucket \nresource \"aws_s3_bucket\" \"s3_tfstate\" {\n  bucket = \"terraforming-mars-tfstate\"\n}\n\n# S3 bucket ACL\nresource \"aws_s3_bucket_acl\" \"s3_acl\" {\n  bucket = aws_s3_bucket.s3_tfstate.id\n  acl    = \"private\"\n}\n\n# S3 bucket encryption\nresource \"aws_s3_bucket_server_side_encryption_configuration\" \"s3_encryption\" {\n  bucket = aws_s3_bucket.s3_tfstate.bucket\n\n  rule {\n    apply_server_side_encryption_by_default {\n      sse_algorithm = \"aws:kms\"\n    }\n  }\n}\n\nresource \"aws_s3_bucket_versioning\" \"s3_bucket_versioning\" {\n  bucket = aws_s3_bucket.s3_tfstate.id\n  versioning_configuration {\n    status = \"Enabled\"\n  }\n}\n\nresource \"aws_s3_bucket_lifecycle_configuration\" \"s3_bucket_retention_policy\" {\n  bucket     = aws_s3_bucket.s3_tfstate.id\n  depends_on = [aws_s3_bucket_versioning.s3_bucket_versioning]\n\n\n  rule {\n    status = \"Enabled\"\n    id     = \"retention_policy\"\n    noncurrent_version_expiration {\n      noncurrent_days = 180\n    }\n\n  }\n}\n\nresource \"aws_s3_bucket_public_access_block\" \"bucket_block_public\" {\n  bucket = aws_s3_bucket.s3_tfstate.id\n\n  block_public_acls       = true\n  block_public_policy     = true\n  ignore_public_acls      = true\n  restrict_public_buckets = true\n}\n\n# DynamoDB \nresource \"aws_dynamodb_table\" \"dynamodb_locktable\" {\n  name           = \"terraforming-mars-locktable\"\n  hash_key       = \"LockID\"\n  billing_mode   = \"PROVISIONED\"\n  write_capacity = 1\n  read_capacity  = 1\n\n  attribute {\n    name = \"LockID\"\n    type = \"S\"\n  }\n}\n</code></pre> <p>The above code block creats a AWS S3 bucket based on the best practices and a DynamoDB table for state locking. After applying the configuration, your base resources to store projects state files is ready. Now we are ready to migrate projects state file from local to AWS S3 remote backend. Modify your Terraform code block to add AWS remote backend configuration:</p> <pre><code>terraform {\n  required_providers {\n    aws = {\n      source = \"hashicorp/aws\"\n    }\n  }\n  backend \"s3\" {\n    bucket         = \"terraforming-mars-tfstate\"\n    key            = \"terraform.state\"\n    region         = \"eu-west-1\"\n    encrypt        = true\n    dynamodb_table = \"terraforming-mars-locktable\"\n  }\n}\n</code></pre> <p>I created base resources in <code>eu-west-1</code> region. You should use the correct region based on your configuration.</p> <p>I also migrate <code>iac-base</code> Terraform state file to this remote backend.</p> <p>Migration from local to a remote backend is EASIER than moving resources from Earth to Mars. You only need to run <code>terraform init</code>. Terraform detects the new backend configuration, and asks about migrating:  </p> <pre><code>terraform init                                                                                                                 \ue0b2 \u2714 \ue0b2 8783 \ue0b2 21:28:48\n\nInitializing the backend...\nDo you want to copy existing state to the new backend?\n  Pre-existing state was found while migrating the previous \"local\" backend to the\n  newly configured \"s3\" backend. No existing state was found in the newly\n  configured \"s3\" backend. Do you want to copy this state to the new \"s3\"\n  backend? Enter \"yes\" to copy and \"no\" to start with an empty state.\n\n  Enter a value: yes\n\nReleasing state lock. This may take a few moments...\n\nSuccessfully configured the backend \"s3\"! Terraform will automatically\nuse this backend unless the backend configuration changes.\n\nInitializing provider plugins...\n- Reusing previous version of hashicorp/aws from the dependency lock file\n- Using previously-installed hashicorp/aws v4.57.0\n\nTerraform has been successfully initialized!\n\nYou may now begin working with Terraform. Try running \"terraform plan\" to see\nany changes that are required for your infrastructure. All Terraform commands\nshould now work.\n\nIf you ever set or change modules or backend configuration for Terraform,\nrerun this command to reinitialize your working directory. If you forget, other\ncommands will detect it and remind you to do so if necessary.\n</code></pre> <p>One of the core concepts of the IaC is about writing one time, and use several times. For example, you can use the same resource implementation to deploy in several environments such as Development, Test, Stage, or Production. Then it comes to a concept called multi-account and multi-backend architecture. I will discuss this concept in a separate blog. </p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#changing-the-s3-bucket","title":"Changing the S3 Bucket","text":"<p>I always say it is better to consider all details before implementation. A design document including all the project details can prevent most future issues. For instance, naming conventions is one of my criteria. But it might happen that you should change the state S3 bucket to another bucket. In this case, Terraform can move your state file from one bucket to another bucket using <code>terraform init -migrate-state</code>. In the below code block, I try to move state file from <code>terraforming-mars-tfstate</code> bucket to <code>terraforming-venus-next-tfstate</code>:  </p> <pre><code>terraform {\n  required_providers {\n    aws = {\n      source = \"hashicorp/aws\"\n    }\n  }\n  backend \"s3\" {\n    bucket         = \"terraforming-venus-next-tfstate\"\n    key            = \"terraform.state\"\n    region         = \"eu-west-1\"\n    encrypt        = true\n    dynamodb_table = \"terraforming-venus-next-locktable\"\n  }\n}\n</code></pre>","tags":["Terraform"]},{"location":"blog/tf-mars.html#best-practices","title":"Best practices","text":"<p>Enable encryption for S3 bucket: Using encryption for the state file in the S3 bucket. State files can contain secrets, keys, etc. in plaintext. So, it is important to keep it encrypted. AWS S3 backend supports different encryption methods: - <code>encrypt</code> - Enable server side encryption of the state file. - <code>kms_key_id</code> - Amazon Resource Name (ARN) of a Key Management Service (KMS) Key to use for encrypting the state. Note that if this value is specified, Terraform will need kms:Encrypt, kms:Decrypt and kms:GenerateDataKey permissions on this KMS key. - <code>sse_customer_key</code> - The key to use for encrypting state with Server-Side Encryption with Customer-Provided Keys (SSE-C). This is the base64-encoded value of the key, which must decode to 256 bits. This can also be sourced from the <code>AWS_SSE_CUSTOMER_KEY</code> environment variable, which is recommended due to the sensitivity of the value. Setting it inside a terraform file will cause it to be persisted to disk in terraform.tfstate.  </p> <p>Enable S3 bucket versioning: Enabling bucket versioning on the S3 bucket is strongly advised as it enables recovery of the state in case of unintended deletions and mistakes.  </p> <p>Enable retention lifecycle policy: As S3 bucket versioning enables, it is wise to have a retention lifecycle policy to delete the old state file objects. You can add <code>noncurrent_version_expiration</code> policy based on your project/organization definition.  </p> <p>Suggested structure for single-environment projects: This is only a suggestion based on my experience with how to have a structure for your Terraform projects. As we discussed it is a good idea to have a project called <code>iac-based</code> including all your base configurations. For example, resources for your Terraform backend:</p> <pre><code>$ tree                                                                               \n.\n\u251c\u2500\u2500 iac-base\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 search-planet-x-state.tf\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 tf-mars-state.tf\n\u2502\u00a0\u00a0 \u2514\u2500\u2500 tf-venus-state.tf\n\u251c\u2500\u2500 searching-for-planet-x\n\u251c\u2500\u2500 terraforming-mars\n\u2514\u2500\u2500 terraforming-venus\n</code></pre>","tags":["Terraform"]}]}