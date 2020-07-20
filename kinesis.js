var req = [
  {
      'question': 'Which of the following is  is a popular open-source search and analytics engine for use cases such as log analytics, real-time application monitoring, and clickstream analysis. '
      , 'optiona': 'Kinesis Data Streams',
      'optionb': ' Glue',
      'optionc': ' Elasticsearch',
      'optiond': 'MSK',
      'answer': 'c',
      'info': ' With Amazon ES, you get direct access to the Elasticsearch APIs; existing code and applications work seamlessly with the service '

  },{
        'question': 'Which Kinesis stream is used for  Real-time data capture '
        , 'optiona': 'Kinesis Data Streams',
        'optionb': 'Kinesis Data Firehose',
        'optionc': ' Kinesis Data Analytics',
        'optiond': 'Kinesis video Streams',
        'answer': 'a',
        'info': '  '

    },
    {
        'question': 'Which Kinesis stream is used to Load real-time data   ',
        'optiona': 'Kinesis Data Streams',
        'optionb': 'Kinesis Data Firehose',
        'optionc': ' Kinesis Data Analytics',
        'optiond': 'Kinesis video Streams',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': 'Which Kinesis stream is used to Get insights in real time ',
        'optiona': 'Kinesis Data Streams',
        'optionb': 'Kinesis Data Firehose',
        'optionc': ' Kinesis Data Analytics',
        'optiond': 'Kinesis video Streams',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': 'Which Kinesis stream is used to Ingest and store data streams from hundreds of thousands of data sources ',
        'optiona': 'Kinesis Data Streams',
        'optionb': 'Kinesis Data Firehose',
        'optionc': ' Kinesis Data Analytics',
        'optiond': 'Kinesis video Streams',
        'answer': 'a',
        'info': '  '
    }
    ,
    {
        'question': 'Which Kinesis stream is used to Load streaming data into data lakes, data stores, and analytics tools ',
        'optiona': 'Kinesis Data Streams',
        'optionb': 'Kinesis Data Firehose',
        'optionc': ' Kinesis Data Analytics',
        'optiond': 'Kinesis video Streams',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': 'Which Kinesis stream is used to Analyze streaming data and gain actionable insights in real time',
        'optiona': 'Kinesis Data Streams',
        'optionb': 'Kinesis Data Firehose',
        'optionc': ' Kinesis Data Analytics',
        'optiond': 'Kinesis video Streams',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': 'Which one is an example of consumer ',
        'optiona': ' a custom application running on Amazon EC2',
        'optionb': ' Amazon Kinesis Data Firehose delivery stream ',
        'optionc': ' Both ',
        'optiond': ' None',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': 'Consumer can store their results using an AWS service ',
        'optiona': 'Amazon DynamoDB',
        'optionb': ' Amazon Redshift ',
        'optionc': ' Amazon S3 ',
        'optiond': ' All',
        'answer': 'd',
        'info': ' '
    } ,
    {
        'question': 'What is Kinesis data stream ',
        'optiona': 'composed of a sequence number, a partition key, and a data blob, which is an immutable sequence of bytes',
        'optionb': ' a uniquely identified sequence of data records in a stream ',
        'optionc': ' used to group data by shard within a stream ',
        'optiond': ' a set of shards',
        'answer': 'd',
        'info': ' '
    } ,
    {
        'question': ' How to make sure that related records end up on the same shards ',
        'optiona': ' increase the number of shards',
        'optionb': '  use proper partition key  ',
        'optionc': ' Both ',
        'optiond': ' None',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"> Read More </a>'
    },
    {
        'question': 'What is AWS Glue '
        , 'optiona': ' ETL Extract Transform Load Service that makes it easy for customers to prepare and load their data for analytics ',
        'optionb': ' Data Catolog ',
        'optionc': ' Step Function ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '   '

    },
    {
        'question': '  A _________ is the base throughput unit of an Amazon Kinesis data stream',
        'optiona': 'Partition key',
        'optionb': ' Sequence number ',
        'optionc': ' shard ',
        'optiond': 'None',
        'answer': 'c',
        'info': ' A shard is the base throughput unit of an Amazon Kinesis data stream. <a href="https://aws.amazon.com/kinesis/data-streams/getting-started/">here </a> '
    } ,
    {
        'question': ' What is incoming_write_bandwidth_in_KB ',
        'optiona': ' average_data_size_in_KB  *  records_per_second',
        'optionb': ' outgoing_read_bandwidth_in_KB * number_of_consumers ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'a',
        'info': ' '
    } ,
    {
        'question': ' What is outgoing_read_bandwidth_in_KB ',
        'optiona': ' average_data_size_in_KB  *  records_per_second',
        'optionb': ' incoming_write_bandwidth_in_KB * number_of_consumers ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'b',
        'info': ' '
    },
    {
        'question': ' What is number_of_shards  ',
        'optiona': 'max(incoming_write_bandwidth_in_KiB/1024, outgoing_read_bandwidth_in_KiB/1024)',
        'optionb': ' max(incoming_write_bandwidth_in_KiB/1024, outgoing_read_bandwidth_in_KiB/2048) ',
        'optionc': ' max(incoming_write_bandwidth_in_KiB/2048, outgoing_read_bandwidth_in_KiB/1024) ',
        'optiond': 'max(incoming_write_bandwidth_in_KiB/2048, outgoing_read_bandwidth_in_KiB/2048)',
        'answer': 'b',
        'info': ' '
    } ,

    {
        'question': 'For Athena ,What are the Supported Types for Partition Projection',
        'optiona': '  string, integer, date, or boolean ',
        'optionb': '  enum, partition, date, or injected ',
        'optionc': '  enum, integer, date, or injected ',
        'optiond': ' enum, integer, boolean, or injected',
        'answer': 'c',
        'info': ' '
    },

    {
        'question': 'Use the ______ type for partition columns with possible values that cannot be procedurally generated within some logical range but that are provided in a query\'s WHERE clause as a single value.',
        'optiona': '   integer  ',
        'optionb': '   date  ',
        'optionc': '  enum ',
        'optiond': '   injected',
        'answer': 'd',
        'info': ' '
    },
    {
        'question': 'You can update the details of a stream using',
        'optiona': ' Kinesis Data Streams console ',
        'optionb': ' the Kinesis Data Streams API ',
        'optionc': ' AWS CLI ',
        'optiond': 'All of the Above',
        'answer': 'd',
        'info': ' '
    } ,
    {
        'question': ' Each shrad can support a maximum total data read rate of',
        'optiona': ' 1 MB/s  ',
        'optionb': ' 2 MB/s  ',
        'optionc': ' 4 MB/s ',
        'optiond': ' 8 MB/s',
        'answer': 'b',
        'info': ' '
    },
    {
        'question': ' Each shrad can support a maximum total data write rate of',
        'optiona': ' 1 MB/s  ',
        'optionb': ' 2 MB/s  ',
        'optionc': ' 4 MB/s ',
        'optiond': ' 8 MB/s',
        'answer': 'a',
        'info': ' '
    },
    {
        'question': ' What is the maximim value of <p>  aws kinesis increase-stream-retention-period --stream-name retentionPeriodDemo --retention-period-hours ? </p>',
        'optiona': ' 24  ',
        'optionb': ' 72  ',
        'optionc': ' 144 ',
        'optiond': ' 168 ',
        'answer': 'd',
        'info': ' '
    },
    {
        'question': ' Which service  is a fully managed service that enables you to build and run applications that use Apache Kafka to process streaming data.',
        'optiona': ' Lake Formation  ',
        'optionb': ' Kinesis  ',
        'optionc': ' MSK ',
        'optiond': ' Glue ',
        'answer': 'c',
        'info': ' '
    },
    {
        'question': ' In MSK how do you create a cluster ',
        'optiona': ' aws kafka create-cluster --cli-input-json file://clusterinfo.json  ',
        'optionb': ' aws kafka describe-cluster --region us-east-1 --cluster-arn "ClusterArn"  ',
        'optionc': ' bin/kafka-topics.sh --create --zookeeper ZookeeperConnectString --replication-factor 3 --partitions 1 --topic AWSKafkaTutorialTopic ',
        'optiond': ' aws kafka get-bootstrap-brokers --region us-east-1 --cluster-arn ClusterArn ',
        'answer': 'a',
        'info': ' '
    },
    {
        'question': ' In MSK how do you create a topic ',
        'optiona': ' aws kafka create-cluster --cli-input-json file://clusterinfo.json  ',
        'optionb': ' aws kafka describe-cluster --region us-east-1 --cluster-arn "ClusterArn"  ',
        'optionc': ' bin/kafka-topics.sh --create --zookeeper ZookeeperConnectString --replication-factor 3 --partitions 1 --topic AWSKafkaTutorialTopic ',
        'optiond': ' aws kafka get-bootstrap-brokers --region us-east-1 --cluster-arn ClusterArn ',
        'answer': 'b',
        'info': ' '
    },
    {
        'question': ' In MSK how do you produce a message ',
        'optiona': ' ./kafka-console-producer.sh --broker-list BootstrapBrokerStringTls --producer.config client.properties --topic AWSKafkaTutorialTopic  ',
        'optionb': ' ./kafka-console-consumer.sh --bootstrap-server BootstrapBrokerStringTls --consumer.config client.properties --topic AWSKafkaTutorialTopic --from-beginning ',
        'optionc': ' bin/kafka-topics.sh --create --zookeeper ZookeeperConnectString --replication-factor 3 --partitions 1 --topic AWSKafkaTutorialTopic ',
        'optiond': ' aws kafka get-bootstrap-brokers --region us-east-1 --cluster-arn ClusterArn ',
        'answer': 'a',
        'info': ' '
    },
    {
        'question': ' In MSK how do you consume a message ',
        'optiona': ' ./kafka-console-producer.sh --broker-list BootstrapBrokerStringTls --producer.config client.properties --topic AWSKafkaTutorialTopic  ',
        'optionb': ' ./kafka-console-consumer.sh --bootstrap-server BootstrapBrokerStringTls --consumer.config client.properties --topic AWSKafkaTutorialTopic --from-beginning ',
        'optionc': ' bin/kafka-topics.sh --create --zookeeper ZookeeperConnectString --replication-factor 3 --partitions 1 --topic AWSKafkaTutorialTopic ',
        'optiond': ' aws kafka get-bootstrap-brokers --region us-east-1 --cluster-arn ClusterArn ',
        'answer': 'b',
        'info': ' '
    },
    {
        'question': ' When you create a new table schema in Athena, Athena stores the schema in a _____ and uses it when you run queries. ',
        'optiona': ' database ',
        'optionb': ' data catalog ',
        'optionc': ' partitions',
        'optiond': ' None ',
        'answer': 'b',
        'info': ' '
    },
    {
        'question': ' Crawlers can crawl which of the following data stores through their respective native interface . ',
        'optiona': ' Amazon DynamoDB ',
        'optionb': ' Amazon Aurora ',
        'optionc': ' Both',
        'optiond': ' None ',
        'answer': 'a',
        'info': ' <a href="https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html"> Read More </a>'
    },
    {
        'question': ' Crawlers can crawl which of the following data stores through a JDBC connection . ',
        'optiona': ' Amazon DynamoDB ',
        'optionb': ' Amazon Aurora ',
        'optionc': ' Both',
        'optiond': ' None ',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html"> Read More </a> '
    },
    {
        'question': 'What are the types of data catalog in Athena ',
        'optiona': ' Lambda ',
        'optionb': ' Glue ',
        'optionc': ' Hive',
        'optiond': ' All of the Above ',
        'answer': 'd',
        'info': ' <a href="https://docs.aws.amazon.com/athena/latest/APIReference/API_DataCatalog.html"> Read More </a> '
    }
];

var title = "Analytics"
