var req = [
    {
                    'question': 'Select the correct statement '
                    , 'optiona': 'A volume can be attached to multiple instances at a time ',
                    'optionb': 'EBS can connected to another EC2 instance',
                    'optionc': 'EBS volume and EC2 instance can be in different Availability Zone',
                    'optiond': 'none',
                    'answer': 'b',
                    'info': 'A volume can only be attached to a single instances at a time  '

                }, {
                    'question': 'EBS falls under which category ?',
                    'optiona': 'IaaS',
                    'optionb': 'PaaS',
                    'optionc': 'SaaS',
                    'optiond': 'None',
                    'answer': 'a',
                    'info': 'EBS is an Infrastructure as a Service'
                },
                {
                    'question': 'EBS snapshots are stored to which AWS service',
                    'optiona': 'EFS',
                    'optionb': 'Instance Store',
                    'optionc': 'Another EBS  ',
                    'optiond': 'S3',
                    'answer': 'd',
                    'info': 'Snapshots are transferred to AWS S3'
                },
                {
                    'question': 'EBS volumes are particularly well-suited for use as ',
                    'optiona': 'primary storage for file systems',
                    'optionb': 'databases',
                    'optionc': 'for any applications that require fine granular updates and access to raw, unformatted, block-level storage',
                    'optiond': 'All of the Above',
                    'answer': 'd',
                    'info': ' All of the Above'
                },
                {
                    'question': ' What is the maximum Volume Size for any EBS volume Types',
                    'optiona': '4TB',
                    'optionb': '8TB',
                    'optionc': '16TB',
                    'optiond': '32TB',
                    'answer': 'c',
                    'info': '16TB'
                }
                ,
                {
                    'question': ' What is gp2 volumes ',
                    'optiona': 'General purpose SSD the default EBS volume type for Amazon EC2 instances ',
                    'optionb': ' backed by hard disk drives (HDDs) and is ideal for frequently accessed, throughput intensive workloads ',
                    'optionc': 'backed by hard disk drives (HDDs) and provides the lowest cost per GB of all EBS volume types',
                    'optiond': 'It is ideal for less frequently accessed workloads with large, cold datasets.',
                    'answer': 'a',
                    'info': 'These volumes are backed by solid-state drives (SSDs) and are suitable for a broad range of transactional workloads, including dev/test environments, low-latency interactive applications, and boot volumes '
                },
                {
                    'question': ' Which of the following volume type is  SSD-based volumes ',
                    'optiona': 'st1',
                    'optionb': 'io1',
                    'optionc': 'sc1',
                    'optiond': 'gp1',
                    'answer': 'b',
                    'info': 'SSD-based volumes include the highest performance EBS volumes (io1) for latency-sensitive transactional workloads'
                },
                {
                    'question': ' How do you access the snapshots   ',
                    'optiona': ' using the regular Amazon S3 API',
                    'optionb': 'only through the Amazon EC2 API',
                    'optionc': ' Amazon S3 API or Amazon EC2 API',
                    'optiond': 'EBS direct API',
                    'answer': 'b',
                    'info': 'snapshots are only available through the Amazon EC2 API. '
                },
                {
                    'question': ' You can boot an EC2 instance using  ',
                    'optiona': 'Multi-Attach enabled volume',
                    'optionb': 'encrypted EBS ',
                    'optionc': 'All of the above',
                    'optiond': 'None of the above',
                    'answer': 'b',
                    'info': 'You cannot boot an EC2 instance using a Multi-Attach enabled volume '
                } ,
                {
                    'question': ' Which service is used for for data aggregation, analysis, transformation,and creation of curated and published datasets ',
                    'optiona': 'EBS',
                    'optionb': 'AWS Athena ',
                    'optionc': 'RDS',
                    'optiond': 'AWS Redshift',
                    'answer': 'b',
                    'info': 'You cannot boot an EC2 instance using a Multi-Attach enabled volume '
                } ,
                {
                    'question': 'What are the options available for protecting your data by backing up your EFS file systems.',
                    'optiona': 'AWS Backup service ',
                    'optionb': 'EFS-to-EFS backup solution ',
                    'optionc': 'Both',
                    'optiond': 'None ',
                    'answer': 'c',
                    'info': 'AWS Backup is a simple and cost-effective way to back up your Amazon EFS file systems. The EFS-to-EFS backup solution is suitable for all Amazon EFS file systems in all AWS Regions. '
                } ,
                {
                    'question': ' With AWS Backup, first you create a backup plan. The backup plan defines',
                    'optiona': 'Schedule  ',
                    'optionb': 'Backup window  ',
                    'optionc': 'Lifecycle',
                    'optiond': 'All  ',
                    'answer': 'd',
                    'info': ' The backup plan defines backup schedule, backup window, retention policy, lifecycle policy, and tags '
                },
                {
                    'question': 'Which service works with Microsoft Active Directory (AD) to integrate with your existing Microsoft Windows environments',
                    'optiona': 'Elastic Block storage  ',
                    'optionb': 'Elastic File System  ',
                    'optionc': 'Amazon FSx for Windows File Server',
                    'optiond': 'AWS Storage Gateway  ',
                    'answer': 'c',
                    'info': '   '
                },
                {
                    'question': 'Which service  connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between your on-premises IT environment and the AWS storage infrastructure in the cloud.',
                    'optiona': 'Elastic Block storage  ',
                    'optionb': 'Elastic File System  ',
                    'optionc': 'Amazon FSx for Windows File Server',
                    'optiond': 'AWS Storage Gateway  ',
                    'answer': 'd',
                    'info': ' AWS Storage Gateway offers file-based, volume-based, and tape-based storage solutions: '
                },
                {
                    'question': 'Which command returns the block indexes and block tokens for blocks that are different between two Amazon Elastic Block',
                    'optiona': 'list-snapshot-blocks ',
                    'optionb': 'list-changed-blocks ',
                    'optionc': 'get-snapshot-block',
                    'optiond': 'start-snapshot ',
                    'answer': 'b',
                    'info': '   '
                },
                {
                    'question': 'We have created a snapshot of EBS , which has 3 blocks 1 2 and 3 . After that data is modified in 1 and 2 blocks . We take another snapshot and delete first snapshot , is it possible to retrieve the third block from snapshot 2 .',
                    'optiona': 'Yes , second snapshot will have all the blocks ',
                    'optionb': 'No , second snapshot has only the refernece of unchanged blocks ',
                    'optionc': 'Unpredictable',
                    'optiond': 'system will not allow to delete first snapshot ',
                    'answer': 'b',
                    'info': '  <a href="https://pages.awscloud.com/Data-Protection-Best-Practices-with-EBS-Snapshots_0813-STG_OD.html">Read more </a> '
                },
                {
                    'question': 'How do you create a snapshot ',
                    'optiona': 'aws ebs complete-snapshot ',
                    'optionb': 'Amazon Data Lifecycle Manager ',
                    'optionc': 'AWSEC2-CreateVssSnapshot SSM  ',
                    'optiond': 'All of the Above ',
                    'answer': 'd',
                    'info': '  <a href="https://pages.awscloud.com/Data-Protection-Best-Practices-with-EBS-Snapshots_0813-STG_OD.html">Read more </a> '
                },
                {
                    'question': 'For Datasync , _____________ is a virtual machine (VM) that is owned by the user, and is used to read or write data from an on-premises storage system. ',
                    'optiona': 'Location ',
                    'optionb': 'Task ',
                    'optionc': 'Agent  ',
                    'optiond': 'All of the Above ',
                    'answer': 'c',
                    'info': '  <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-agents.html">Read more </a> '
                },
                {
                    'question': 'How do you create a bucket ',
                    'optiona': 'aws s3 mv ',
                    'optionb': 'aws s3 mb ',
                    'optionc': 'aws s3 cp  ',
                    'optiond': 'aws s3 ls ',
                    'answer': 'b',
                    'info': '   '
                },
                {
                    'question': 'How do you move a local file or S3 object to another location locally or in S3 ',
                    'optiona': 'aws s3 mv ',
                    'optionb': 'aws s3 mb ',
                    'optionc': 'aws s3 cp  ',
                    'optiond': 'aws s3 ls ',
                    'answer': 'a',
                    'info': '   '
                }
];

var title = "Storage"
