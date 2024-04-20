from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse,HttpRequest
import requests
# Create your views here.
auth_url_discord="https://discord.com/oauth2/authorize?client_id=921417993806807080&response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Foauth2%2Flogin%2Fredirect&scope=identify"

def home(request:HttpRequest)->JsonResponse:
    return JsonResponse({"msg":"Hello"})

def discord_login(request:HttpRequest):
 return redirect(auth_url_discord)

def discord_login_redirect(request:HttpRequest):
   code=request.GET.get('code')
   print(code)
   user=exchange_code(code)
   return JsonResponse({"user":user})

def exchange_code(code:str):
   data={
      "client_id":"921417993806807080",
      "client_secret":"uvigOAPRdVTI920mWpZHO9HtB6LlOrST",
      "grant_type":"authorization_code",
      "code":code,
      "redirect_uri":"http://127.0.0.1:8000/oauth2/login/redirect",
      "scope":"identify"
   }
   headers={
      'Content-Type':'application/x-www-form-urlencoded',
   }
   response=requests.post("https://discord.com/api/oauth2/token",data=data,headers=headers)
   print(response)
   credentials=response.json()
   access_token=credentials['access_token']
   response=requests.get("https://discord.com/api/v6/users/@me",headers={
      'Authorization':"Bearer %s" % access_token
   })
   print(response)
   user=response.json()
   print(user)
   return user