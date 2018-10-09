import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
import re
from typing import List


client = commands.Bot(command_prefix = ".")

@client.event
async def on_ready():
   print("Bot Opend")
   
 
 
 
 
client.run("Token")
