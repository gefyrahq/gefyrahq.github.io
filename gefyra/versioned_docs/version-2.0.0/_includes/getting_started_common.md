## Running Gefyra

<div>{
   !props.hideUp ?
<div>

4. Set up Gefyra with 

```sh
gefyra up
```
</div> : ''}
</div>

5. Run a local Docker image with Gefyra in order to  make it part of the cluster.
   1. Build your Docker image with a local tag, for example from the testing directory:
   `cd testing/images/ && docker build -f Dockerfile.local . -t pyserver`
   2. Execute Gefyra's run command:    
   ```sh
   gefyra run -i pyserver -N mypyserver -n default
   ```
   3. _exec_ into the running container and look around. You will find the container to run within your Kubernetes cluster.  
   ```sh
   docker exec -it mypyserver bash
   ```
   ```sh
   wget -O- hello-nginx
   ```
will print out the website of the cluster service _hello-nginx_ from within the cluster.

6. Create a bridge in order to intercept the traffic to the cluster application with the one running locally:    
```sh
gefyra bridge -N mypyserver -n default --port 8000:80 --target deploy/hello-nginxdemo/hello-nginx
``` 
Check out the locally running server comes up under: http://hello.127.0.0.1.nip.io:8080/  

7. List all running _bridges_:  
```sh
gefyra list --bridges
```

8. _Unbridge_ the local container and reset the cluster to its original state: 
```sh
gefyra unbridge -N mypybridge
```
Check out the initial response from: http://hello.127.0.0.1.nip.io:8080/  

## Cleaning up
9. Remove Gefyra's components from the cluster with 
```sh
gefyra down
```
