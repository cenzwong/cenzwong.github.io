#!/usr/bin/env python

# WS server example

import asyncio
import websockets
#####TCP
import sys
from socket import socket, AF_INET, SOCK_DGRAM

SERVER_IP   = '192.168.43.4'
PORT_NUMBER = 5000
SIZE = 1024
print ("Test client sending packets to IP {0}, via port {1}\n".format(SERVER_IP, PORT_NUMBER))

mySocket = socket( AF_INET, SOCK_DGRAM )
#####
async def hello(websocket, path):
    name = await websocket.recv()
    print(f"< {name}")

    greeting = f"{name}"

    myMessage = f"{name}"
    mySocket.sendto(myMessage.encode('utf-8'),(SERVER_IP,PORT_NUMBER))

    await websocket.send(greeting)
    print(f"> {greeting}")

start_server = websockets.serve(hello, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()


