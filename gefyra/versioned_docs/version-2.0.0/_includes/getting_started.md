#### 2. Run a local Docker container with Gefyra in order to connect it with the cluster.
##### 2.1 Build a simple Docker image with a local tag. Save the following two files in a directory on your disk.  
    
   File `./Dockerfile`
   
   ```Dockerfile
   FROM ubuntu
   # run a server on port 8000
   RUN apt update && apt install -y iproute2 iputils-ping python3 traceroute wget curl
   COPY local.py local.py
   CMD python3 local.py
   ```
   
   File `./local.py`

   ```python
   import http.server
   import signal
   import socket
   import socketserver
   import sys
   from datetime import datetime

   if sys.argv[1:]:
      port = int(sys.argv[1])
   else:
      port = 8000

   class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
      def do_GET(self):
         self.send_response(200)
         self.send_header("Content-type", "text/html")
         self.end_headers()
         hostname = socket.gethostname()
         now = datetime.utcnow()
         self.wfile.write(
               bytes(
                  f"<html><body><h1>Hello from Gefyra. It is {now} on"
                  f" {hostname}.</h1></body></html>".encode("utf-8")
               )
         )

   my_handler = MyHttpRequestHandler
   server = socketserver.ThreadingTCPServer(("", port), my_handler)

   def signal_handler(signal, frame):
      try:
         if server:
               server.server_close()
      finally:
         sys.exit(0)

   signal.signal(signal.SIGINT, signal_handler)
   try:
      while True:
         sys.stdout.flush()
         server.serve_forever()
   except KeyboardInterrupt:
      pass

   server.server_close()
   ```

##### 2.2 Build it by running `docker build -f Dockerfile . -t pyserver` in your directory.  
##### 2.3 Execute Gefyra's run command:    
   ```sh
   gefyra run -d -i pyserver -N mypyserver -n default
   ```
   **Important**: `gefyra run` is just a wrapper for `docker run` (with additional flags), yet it also applies Gefyra's networking 
   configuration to connect the container with Kubernetes. Check out [the docs for `gefyra run`](/docs/cli#run)

#### 3. _Exec_ into the running container and look around. You will find the container to run within your Kubernetes cluster.  
```sh
docker exec -it mypyserver bash
```
```sh
wget -O- hello-nginx
```
will print out the website of the cluster service _hello-nginx_ from within the cluster. 🚀

#### 4. Create a bridge to redirect the traffic from the cluster application to the one running locally:    
```sh
gefyra bridge -N mypyserver -n default --ports 80:8000 --target deploy/hello-nginxdemo/hello-nginx
``` 
Check out the locally running server serving the cluster by refreshing the address from the service in Kubernetes.  
It shows you a different message: `Hello from Gefyra. It is ...`. Yes, that is really coming from your local container! 😎

#### 5. List all running _bridges_:
You can list all currently active bridges with:
```sh
gefyra list --bridges
```
You will find all local containers that are currently linked into the cluster serving requests. 

#### 6. _Unbridge_ the local container and reset the cluster to its original state: 
```sh
gefyra unbridge --all
```
Check out the original response from from the service. The cluster is now reset to its inital state again.

## Cleaning up
Remove Gefyra's components from the cluster and your local Docker host with:
```sh
gefyra down
```