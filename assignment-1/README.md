## Deploy and undeploy webserver resources on multiple server machines using ansible

### Deploying webserver:
```
$ansible-playbook -i inventory --tags deploy main.yaml -K -s -u demouser
```

### Undeploying webserver:
```
$ansible-playbook -i inventory --tags undeploy main.yaml -K -s -u demouser
```
