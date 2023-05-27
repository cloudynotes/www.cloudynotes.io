var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"blog/camelup.html","title":"Yo-Yo attacks on cloud auto-scaling","text":"","tags":["Cloud"]},{"location":"blog/main.html","title":"blogs","text":"<p>This blog section is a place where we can explore a wide range of topics and ideas, from the latest technology trends to tips for self-improvement and personal growth. Whether you're a tech enthusiast, a curious learner, or someone seeking inspiration, there's something for everyone here.</p> <p>{{ blog_content }}</p> <p>Thank you for joining me on this adventure, and I look forward to connecting with you soon!  </p>"},{"location":"blog/rulebook.html","title":"Unlocking the Power of Effective Documentation","text":"<p>Good documentation for a product is like a well-written rulebook in a boardgame - it makes the game easy to understand, enjoyable to play, and accessible to all.</p> <p>Root is a strategy board game that took the tabletop world by storm upon its release in 2018. Developed by Cole Wehrle and published by Leder Games, Root is a game of woodland might and right that pits players against each other in a battle for control over a richly detailed and immersive woodland kingdom. With its unique asymmetric gameplay, gorgeous artwork, and rich thematic setting, Root offers endless hours of fun and strategic challenge for players of all skill levels. Whether you're a seasoned tabletop enthusiast or a newcomer to the world of board games, Root is sure to captivate your imagination and test your strategic abilities to their limits. Although Root is a complex game with a rating of 3.78/5, a well-designed rulebook makes it easier to learn and start playing. For more information, please visit: BoardGameGeek</p>","tags":["General"]},{"location":"blog/rulebook.html#introduction","title":"Introduction","text":"<p>While a board game may be well-designed and not overly complex, it can be difficult to understand and enjoy without a good rulebook. Developers often focus on writing efficient, high-quality code that meets the requirements of the project. However, the importance of good documentation is sometimes overlooked. Good documentation is an essential component of any product, as it provides a roadmap for users to effectively understand and use it.  </p> <p>Recently, I had a discussion with a colleague about improving the technical documentation for our project, and he suggested checking out divio. The website, written by Daniele Procida, is based on <code>The Grand Unified Theory of Documentation</code> by David Laing, a popular and transformative documentation authoring framework. I have read the websites' articles and watched a YouTube video presented by Daniele. In this blog post, I will provide a summary of the suggested framework, as well as share my personal experience about effective documentation.    </p> <p>It doesn\u2019t matter how good your product is, because if its documentation is not good enough, people will not use it.  documentation.divio.com </p> <p>According to <code>the Grand Unified Theory of Documentation</code> framework, there are four distinct components of documentation, rather than one monolithic entity:  </p> <ul> <li>Tutorials  </li> <li>How-to guide  </li> <li>Reference materials  </li> <li>Discussions  </li> </ul> <p>By recognizing and addressing each of these components separately, we can create more effective and targeted documentation that meets the needs of both authors and readers.  </p>","tags":["General"]},{"location":"blog/rulebook.html#tutorials","title":"Tutorials","text":"<p>Tutorials are instructional lessons that guide readers through a series of steps to complete a project. They are designed to teach how to do something, rather than just to provide information. As a product owner, it is important to ensure that the end goal of the tutorial is both meaningful and achievable for a beginner user. A well-designed tutorial can help learners make sense of the product, while a poorly executed or missing tutorial can hinder the acquisition of new users. Writing and maintaining tutorials can be time-consuming, but they are essential for helping users to successfully navigate and utilize a project. </p> <p>The list below shows the main points of tutorial documents:    </p> <ul> <li>Writing should be clear and easy to understand for the reader.  </li> <li>Provide a hands-on experience that inspires the reader.  </li> <li>Start with simple concepts and gradually move towards more complex ones.  </li> <li>Make the document enjoyable to read. Avoid starting with complex information that may discourage the reader.  </li> <li>Learning by doing should be emphasized throughout the tutorial.  </li> <li>Ensure the tutorial is repeatable on all platforms, even if it requires more work.  </li> <li>Use concrete examples and specifics rather than generalizations.  </li> <li>The tutorial should focus on practical skills.  </li> <li>Avoid distractions and unnecessary options.  </li> <li>Emphasize the importance of the tutorial for those who are new to the project.  </li> <li>Demonstrate to newcomers that it is possible to learn and that the tutorial is oriented towards learning.  </li> </ul>","tags":["General"]},{"location":"blog/rulebook.html#how-to-guide","title":"How-to guide","text":"<p>The purpose of how-to guides is to provide a step-by-step process for solving real-world problems. They are goal-oriented and provide specific instructions for achieving a particular outcome. For example, how to setup your company VPN, or how to add a new SSH key. Unlike tutorials, how-to guides assume some level of prior knowledge and experience from the user. While tutorials are designed for beginners and cover basic concepts, how-to guides are intended to answer more advanced questions. In the realm of software documentation, how-to guides are typically well-executed and enjoyable to write.  </p> <p>Based on a project experience, how-to guides are sometimes also called <code>runbooks</code>. Each runbook has a specific goal and  provides readers with step-by-step guidance to achieve that goal.  </p> <p>The following list outlines the key points covered in the tutorial documents:    </p> <ul> <li>How-to documentation is problem-oriented.  </li> <li>It focuses on achieving a specific result through a step-by-step guide.  </li> <li>How-to guides are entirely practical.  </li> <li>They are easy to write for technical/product owners.  </li> <li>Readers should have some basic knowledge before starting the guide.  </li> <li>How-to documents can be linked together. Therefore, if one document depends on another, readers can easily navigate between them.  </li> <li>Choose an appropriate title for the guide.  </li> </ul>","tags":["General"]},{"location":"blog/rulebook.html#reference-materials","title":"Reference materials","text":"<p>Reference guides provide technical descriptions of machinery and how to operate it. Unlike how-to guides, reference material focuses solely on information, providing details about functions, fields, attributes, and methods. It may include basic descriptions of how to use the machinery, but it should not attempt to explain basic concepts or provide instructions on how to achieve common tasks. Reference material is straightforward and austere, and may be generated automatically to some extent, but it is never sufficient on its own. For some developers, reference guides are the only kind of documentation they can imagine, assuming that others only need technical information about the software.  </p> <p>We use references every day! API references, Linux commands' references, Python packages'references, and more.</p>","tags":["General"]},{"location":"blog/rulebook.html#discussions","title":"Discussions","text":"<p>Discussions or explanations in documentation clarify and broaden the coverage of a particular topic, providing a higher-level perspective and illuminating the subject matter. Unlike how-to guides or reference material, explanations are understanding-oriented and discursive in nature, often scattered among other sections rather than explicitly created. Discussions can be challenging to create as they require a broader view of the software and a deeper understanding of the subject matter. The division of topics for discussion can sometimes be arbitrary, defined by what the author thinks is a reasonable area to cover at one time rather than a specific task or learning objective.  </p>","tags":["General"]},{"location":"blog/rulebook.html#example","title":"Example","text":"<p>Several websites offer their product documentation using this framework. Let's take a look at one of them: Ubuntu Server documentation!  </p> <p> </p> <p>As we can see, the documentation includes the four main components: Ubuntu Server tutorials: This section of the documentation contains step-by-step tutorials to outline what Ubuntu Server is capable of while helping readers achieve specific aims. The tutorials start with a basic installation guide and continue with a collection of related tutorials and topics that will help readers learn more about Ubuntu Server.  </p> <p>Ubuntu Server how-to guides: The documentation includes a variety of how-to guides that provide readers with specific goals to accomplish. However, it is assumed that readers are already familiar with Ubuntu Server, as the guides may require readers to understand and adapt the steps to fit their specific requirements. While the guides will help readers achieve an end result, they may need to be customized to fit specific needs.  </p> <p>Ubuntu Server explanation guides: This section includes explanatory and conceptual materials aimed at enhancing user comprehension of the functioning and configuration of Ubuntu Server, thereby making it easier to use. The section is divided into three main topics: Software, Network, and Cryptography.    </p> <p>Ubuntu Server reference: This section provides a list of available software and command references. Readers can refer to this documentation to figure out how to interact with different Ubuntu tools and commands.  </p>","tags":["General"]},{"location":"blog/rulebook.html#summary","title":"Summary","text":"<p>Based on the <code>the Grand Unified Theory of Documentation</code> framework, the four distinct components of documentation are interconnected. Tutorials and Discussions are particularly helpful for readers who are just starting to learn, while How-to guides and references are more practical documents that assist in development.  </p> <p> </p> Provided by documentation.divio.com <p>For a software development project, a README file is an essential component, as it serves as a guide to help users understand what the project is about and how to use it. A well-written README file can ensure that a project is more accessible, easier to use, and encourages collaboration among developers. Let's discuss README files in another blog post. ;) </p>","tags":["General"]},{"location":"blog/tags.html","title":"List of all blogs","text":"<p>{{ tag_content }}</p>"},{"location":"blog/tf-mars.html","title":"Moving HashiCorp Terraform state file","text":"<p>This isn't a blog about board games, but HashiCorp Terraform makes me think of the Terraforming Mars board game!</p> <p>Terraforming Mars is a board game designed by Jacob Fryxelius and published by FryxGames in 2016. The game is set in the future, where players take on the role of corporations that work together to terraform Mars and make it habitable for human life. You can check more here: BoardGameGeek</p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#terraform-state-file","title":"Terraform state file","text":"<p>Infrastructure as Code (IaC) enables us to use code to manage infrastructure resources. This approach makes it easier to manage complex infrastructures, reduce manual errors, and increase efficiency.</p> <p>These days HashiCorp Terraform is one of the popular IaC tools. It supports a wide range of Cloud providers and services including AWS, Azure, GCP, K8S, and many others. This enables infrastructure engineers to manage their infrastructure resources in a consistent way, regardless of the cloud provider they are using.</p> <p>Terraform provides a state management mechanism to track the state of the infrastructure resources. This allows us to understand the current state of the infrastructure, identify changes that have been made, and easily make updates. Terraform stores the current state of the infrastructure in a file called tfstate. This state is used by Terraform to map real world resources to the configuration, keep track of metadata, and to improve performance for large infrastructures.</p> <p>This state file is stored locally by default in a file called <code>terraform.tfstate</code>. Terraform utilizes the state file to generate plan and carry out modifications to the infrastructure. Terraform performs a refresh before carrying out any action to update the state with the current state of the infrastructure. That\u2019s why we see <code>Refreshing state\u2026</code> in each Terraform plan output.</p> <pre><code>$ terraform plan\naws_dynamodb_table.dynamodb_locktable: Refreshing state... [id=terraforming-mars-locktable]\naws_s3_bucket.s3_tfstate: Refreshing state... [id=terraforming-mars-tfstate]\n</code></pre> <p>You can read more about Terraform state purpose here: Purpose of Terraform State</p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#terraform-backend","title":"Terraform backend","text":"<p>Terraform enables us to collaborate with other members of our team by using version control systems such as Git. This makes it easier to share infrastructure code, review changes, and ensure that everyone is working on the same version of the infrastructure. However, using a local Terraform state file can be challenging because everyone must make sure to pull the latest tfstate file locally and ensure that nobody else is running Terraform at the same time.</p> <p>To solve this issue, Terraform introduces remote state. Using remote state, the state file can be written to a remote data store. Now, teammates can collaborate on a project without any concern about the latest tfstate file version. Remote state is implemented by a backend or by Terraform Cloud.</p> <p>Terraform supports various types of backends, including AWS S3, Azure Blob Storage, and HashiCorp Consul. These backends provide remote storage for Terraform state files, making it easier to manage infrastructure resources across teams and environments. When using a remote backend, Terraform can read the current state and apply changes to the infrastructure based on that state.</p> <p>However, what if Terraform executed concurrently? Terraform has an ability to lock the state file. Whenever there is a possibility of writing state, the process of state locking occurs automatically. Backends are responsible for providing an API for state locking and state locking is optional.</p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#default-backend","title":"Default backend","text":"<p>Terraform uses a backend called <code>local</code> as the default option, which stores the state data locally as a file on the disk. It means that we do not need to add backend block configuration. For example, the below code block shows the terraform block configured with aws provider:</p> <pre><code>    terraform {\n      required_providers {\n        aws = {\n          source = \"hashicorp/aws\"\n        }\n      }\n    }\n</code></pre> <p>The state file in Terraform is typically stored locally in the current project directory. However, you may wonder how to store the tfstate file in a different location. This can be accomplished by specifying a backend configuration in your Terraform code, which tells Terraform where to store the state file:</p> <pre><code>    terraform {\n      required_providers {\n        aws = {\n          source = \"hashicorp/aws\"\n        }\n      }\n      backend \"local\" {\n        path = \"local_path/terraform.tfstate\"\n      }\n    }\n</code></pre> <p>By adding the backend configuration block and running <code>terraform init</code>, you will get an error message indicates change in backend configuration:</p> <pre><code>    $ terraform init\n    Initializing the backend...\n    Error: Backend configuration changed\n\n    A change in the backend configuration has been detected, which may require migrating existing state.\n\n    If you wish to attempt automatic migration of the state, use \"terraform init -migrate-state\".\n    If you wish to store the current configuration with no changes to the state, use \"terraform init -reconfigure\".\n</code></pre> <p>The error message simply explains the root cause and the possible solutions. The <code>-migrate-state</code> option will attempt to copy existing state to the new backend, and depending on what changed, may result in interactive prompts to confirm migration of workspace states. On the other hand, the <code>-reconfigure</code> option disregards any existing configuration, preventing migration of any existing state.  </p> <p>If you are trying to move the state file from the default working directory to your custom directory, <code>-migrate-state</code> is the correct option.</p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#migrating-to-a-remote-backend","title":"Migrating to a remote backend","text":"<p> Now, how can we move the local state file of a current project to a remote backend? As we understood, using a remote backend can help improve collaboration, scalability, security, and ease of management when working with Terraform.</p> <p>I would like to divide the supported backends into two categories: Local and Remote. In the Local group, the state file is stored locally (default or using a local configuration). The Remote group includes options such as Terraform Cloud, AWS S3, Azurerm, and others.</p> <p>HashiCorp says that remote backend is unique among all other Terraform backends. Read more about it here: Terraform Remote Backend</p> <p>In this demonstration, I try to use AWS S3 backend. AWS S3 backend supports state locking via AWS DynamoDB. It means that it doesn\u2019t support state locking out of the box.</p> <p>As an example of an in-the-box locking feature, Azurerm supports state locking and consistency checking with Azure Blob Storage native capabilities.</p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#implementation","title":"Implementation","text":"<p>In the first step, let's create resources an AWS to support storing Terraform project state file and status. Based on a project experience, I have a project called <code>iac-base</code> includes all the base infrastructure for other projects deployment. The below code block shows <code>iac-base</code> resources:  </p> <pre><code>    # S3 bucket \n    resource \"aws_s3_bucket\" \"s3_tfstate\" {\n      bucket = \"terraforming-mars-tfstate\"\n    }\n\n    # S3 bucket ACL\n    resource \"aws_s3_bucket_acl\" \"s3_acl\" {\n      bucket = aws_s3_bucket.s3_tfstate.id\n      acl    = \"private\"\n    }\n\n    # S3 bucket encryption\n    resource \"aws_s3_bucket_server_side_encryption_configuration\" \"s3_encryption\" {\n      bucket = aws_s3_bucket.s3_tfstate.bucket\n\n      rule {\n        apply_server_side_encryption_by_default {\n          sse_algorithm = \"aws:kms\"\n        }\n      }\n    }\n\n    resource \"aws_s3_bucket_versioning\" \"s3_bucket_versioning\" {\n      bucket = aws_s3_bucket.s3_tfstate.id\n      versioning_configuration {\n        status = \"Enabled\"\n      }\n    }\n\n    resource \"aws_s3_bucket_lifecycle_configuration\" \"s3_bucket_retention_policy\" {\n      bucket     = aws_s3_bucket.s3_tfstate.id\n      depends_on = [aws_s3_bucket_versioning.s3_bucket_versioning]\n\n\n      rule {\n        status = \"Enabled\"\n        id     = \"retention_policy\"\n        noncurrent_version_expiration {\n          noncurrent_days = 180\n        }\n\n      }\n    }\n\n    resource \"aws_s3_bucket_public_access_block\" \"bucket_block_public\" {\n      bucket = aws_s3_bucket.s3_tfstate.id\n\n      block_public_acls       = true\n      block_public_policy     = true\n      ignore_public_acls      = true\n      restrict_public_buckets = true\n    }\n\n    # DynamoDB \n    resource \"aws_dynamodb_table\" \"dynamodb_locktable\" {\n      name           = \"terraforming-mars-locktable\"\n      hash_key       = \"LockID\"\n      billing_mode   = \"PROVISIONED\"\n      write_capacity = 1\n      read_capacity  = 1\n\n      attribute {\n        name = \"LockID\"\n        type = \"S\"\n      }\n    }\n</code></pre> <p>The above code block creats a AWS S3 bucket based on the best practices and a DynamoDB table for state locking. After applying the configuration, your base resources to store projects state files is ready. Now we are ready to migrate projects state file from local to AWS S3 remote backend. Modify your Terraform code block to add AWS remote backend configuration:</p> <pre><code>    terraform {\n      required_providers {\n        aws = {\n          source = \"hashicorp/aws\"\n        }\n      }\n      backend \"s3\" {\n        bucket         = \"terraforming-mars-tfstate\"\n        key            = \"terraform.state\"\n        region         = \"eu-west-1\"\n        encrypt        = true\n        dynamodb_table = \"terraforming-mars-locktable\"\n      }\n    }\n</code></pre> <p>I created base resources in <code>eu-west-1</code> region. You should use the correct region based on your configuration.</p> <p>I also migrate <code>iac-base</code> Terraform state file to this remote backend.</p> <p>Migration from local to a remote backend is EASIER than moving resources from Earth to Mars. You only need to run <code>terraform init</code>. Terraform detects the new backend configuration, and asks about migrating:  </p> <pre><code>    $ terraform init \n\n    Initializing the backend...\n    Do you want to copy existing state to the new backend?\n      Pre-existing state was found while migrating the previous \"local\" backend to the\n      newly configured \"s3\" backend. No existing state was found in the newly\n      configured \"s3\" backend. Do you want to copy this state to the new \"s3\"\n      backend? Enter \"yes\" to copy and \"no\" to start with an empty state.\n\n      Enter a value: yes\n\n    Releasing state lock. This may take a few moments...\n\n    Successfully configured the backend \"s3\"! Terraform will automatically\n    use this backend unless the backend configuration changes.\n\n    Initializing provider plugins...\n    - Reusing previous version of hashicorp/aws from the dependency lock file\n    - Using previously-installed hashicorp/aws v4.57.0\n\n    Terraform has been successfully initialized!\n\n    You may now begin working with Terraform. Try running \"terraform plan\" to see\n    any changes that are required for your infrastructure. All Terraform commands\n    should now work.\n\n    If you ever set or change modules or backend configuration for Terraform,\n    rerun this command to reinitialize your working directory. If you forget, other\n    commands will detect it and remind you to do so if necessary.\n</code></pre> <p>One of the core concepts of the IaC is about writing one time, and use several times. For example, you can use the same resource implementation to deploy in several environments such as Development, Test, Stage, or Production. Then it comes to a concept called multi-account and multi-backend architecture. I will discuss this concept in a separate blog. </p>","tags":["Terraform"]},{"location":"blog/tf-mars.html#changing-the-s3-bucket","title":"Changing the S3 Bucket","text":"<p>I always say it is better to consider all details before implementation. A design document including all the project details can prevent most future issues. For instance, naming conventions is one of my criteria. But it might happen that you should change the state S3 bucket to another bucket. In this case, Terraform can move your state file from one bucket to another bucket using <code>terraform init -migrate-state</code>. In the below code block, I try to move state file from <code>terraforming-mars-tfstate</code> bucket to <code>terraforming-venus-next-tfstate</code>:  </p> <pre><code>    terraform {\n      required_providers {\n        aws = {\n          source = \"hashicorp/aws\"\n        }\n      }\n      backend \"s3\" {\n        bucket         = \"terraforming-venus-next-tfstate\"\n        key            = \"terraform.state\"\n        region         = \"eu-west-1\"\n        encrypt        = true\n        dynamodb_table = \"terraforming-venus-next-locktable\"\n      }\n    }\n</code></pre>","tags":["Terraform"]},{"location":"blog/tf-mars.html#best-practices","title":"Best practices","text":"<p>Enable encryption for S3 bucket: Using encryption for the state file in the S3 bucket. State files can contain secrets, keys, etc. in plaintext. So, it is important to keep it encrypted. AWS S3 backend supports different encryption methods: </p> <ul> <li><code>encrypt</code> - Enable server side encryption of the state file.  </li> <li><code>kms_key_id</code> - Amazon Resource Name (ARN) of a Key Management Service (KMS) Key to use for encrypting the state. Note that if this value is specified, Terraform will need kms:Encrypt, kms:Decrypt and kms:GenerateDataKey permissions on this KMS key.  </li> <li><code>sse_customer_key</code> - The key to use for encrypting state with Server-Side Encryption with Customer-Provided Keys (SSE-C). This is the base64-encoded value of the key, which must decode to 256 bits. This can also be sourced from the <code>AWS_SSE_CUSTOMER_KEY</code> environment variable, which is recommended due to the sensitivity of the value. Setting it inside a terraform file will cause it to be persisted to disk in terraform.tfstate.  </li> </ul> <p>Enable S3 bucket versioning: Enabling bucket versioning on the S3 bucket is strongly advised as it enables recovery of the state in case of unintended deletions and mistakes.  </p> <p>Enable retention lifecycle policy: As S3 bucket versioning enables, it is wise to have a retention lifecycle policy to delete the old state file objects. You can add <code>noncurrent_version_expiration</code> policy based on your project/organization definition.  </p> <p>Suggested structure for single-environment projects: This is only a suggestion based on my experience with how to have a structure for your Terraform projects. As we discussed it is a good idea to have a project called <code>iac-based</code> including all your base configurations. For example, resources for your Terraform backend:</p> <pre><code>$ tree                                                                               \n.\n\u251c\u2500\u2500 iac-base\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 search-planet-x-state.tf\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 tf-mars-state.tf\n\u2502\u00a0\u00a0 \u2514\u2500\u2500 tf-venus-state.tf\n\u251c\u2500\u2500 searching-for-planet-x\n\u251c\u2500\u2500 terraforming-mars\n\u2514\u2500\u2500 terraforming-venus\n</code></pre>","tags":["Terraform"]},{"location":"trainings/docker/intro.html","title":"Introduction to Docker","text":""},{"location":"trainings/docker/intro.html#the-birth-of-the-docker","title":"The birth of the Docker","text":"<p>Docker was first introduced to the world\u2014with no pre-announcement and little fanfare\u2014by Solomon Hykes, founder and CEO of dotCloud, in a five-minute lightning talk at the Python Developers Conference in Santa Clara, California, on March 15, 2013. At the time of this announcement, only about 40 people outside dotCloud been given the opportunity to play with Docker. It didn't take much time for the project to become famous among tech enthusiasts, and many developers started contributing to the project. It sparked a revolution in the field of software development. Docker is a tool that promises to easily encapsulate the process of creating a distributable artifact for any application, deploying it at scale into any environment, and streamlining the workflow and responsiveness of agile software organizations.  </p> <p>Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker\u2019s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production. (https://docs.docker.com/)  </p> <p></p>"},{"location":"trainings/docker/intro.html#why-docker","title":"Why Docker","text":"<p>There are many reasons why Docker became popular in software development. To me, simplicity and cross-platform deployment are the main reasons. Docker simplifies architectural decisions because all applications essentially appear the same from the hosting system's perspective. Additionally, Docker makes tooling easier to write and share between applications. Here are some more of the things you get with Docker:  </p> <ul> <li>Fast, consistent delivery of your applications  </li> <li>Packaging software in a way that leverages the skills developers already have  </li> <li>Bundling application software and required OS filesystems together in a single standardized image format  </li> <li>Running more workloads on the same hardware  </li> <li>Using packaged artifacts to test and deliver the exact same artifact to all systems in all environments  </li> </ul>"},{"location":"trainings/docker/intro.html#process-simplification","title":"Process Simplification","text":"<p>Docker can simplify both workflows and communication, and that usually starts with the deployment story. Traditionally, the cycle of getting an application to production often looks something like the following:  </p> <p> </p> <p>Our experience has shown that deploying a brand new application into production can take the better part of a week for a complex new system. That\u2019s not very productive, and even though DevOps practices work to alleviate some of the barriers, it often requires a lot of effort and communication between teams of people. This process can often be both technically challenging and expensive, but even worse, it can limit the kinds of innovation that development teams will undertake in the future. If deploying software is hard, time-consuming, and requires resources from another team, then developers will often build everything into the existing application in order to avoid suffering the new deployment penalty.  </p> <p>Docker preaches an approach of \u201cbatteries included but removable.\u201d Which means that they want their tools to come with everything most people need to get the job done, while still being built from interchangeable parts that can easily be swapped in and out to support custom solutions. By using an image repository as the hand-off point, Docker allows the responsibility of building the application image to be separated from the deployment and operation of the container.  </p> <p>What this means in practice is that development teams can build their application with all of its dependencies, run it in development and test environments, and then just ship the exact same bundle of application and dependencies to production. Because those bundles all look the same from the outside, operations engineers can then build or install standard tooling to deploy and run the applications.  </p> <p> </p>"},{"location":"trainings/docker/intro.html#what-docker-isnt","title":"What Docker isn't","text":"<p>Docker can be used to solve a wide breadth of challenges that other categories of tools have traditionally been enlisted to fix; however, Docker\u2019s breadth of features often means that it lacks depth in specific functionality. In the following list, we explore some of the tool categories that Docker doesn\u2019t directly replace but that can often be used in conjunction to achieve great results:  </p> <ul> <li> <p>Virtualization Platform A container is not a virtual machine in the traditional sense. Virtual machines contain a complete operating system, running on top of the host operating system. The biggest advantage is that it is easy to run many virtual machines with radically different operating systems on a single host. With containers, both the host and the containers share the same kernel. This means that containers utilize fewer system resources, but must be based on the same underlying operating system. </p> </li> <li> <p>Cloud Platform Like virtualization, the container workflow shares a lot of similarities on the surface with cloud platforms. Both are traditionally leveraged to allow applications to be horizontally scaled in response to changing demand. Docker, however, is not a cloud platform. It only handles deploying, running, and managing containers on pre-existing Docker hosts. It doesn\u2019t allow you to create new host systems (instances), object stores, block storage, and the many other resources that are typically associated with a cloud platform.  </p> </li> </ul> <p> </p>"}]}