/* 
 var title =Area_check(obj['country'])+' '+' '+flags.get(obj['countryCode']);
 var subtitle ='🍎'+City_ValidCheck(obj['city'])+'-'+'('+ ISP_ValidCheck(obj['org'])+')'+'🌍';
 */

 if ($response.statusCode != 200) {
   $done(null);
 }

 const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']
 var city0 = " ";
 var isp0 = " ";
 function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
 }

 /*function City_ValidCheck(para) {
   if(para) {
   return para
   } 
   else
   {
   return city0
   }
 }
 */
 function ISP_ValidCheck(para) { 
   if(para) {
   return para
   }
   else
   {
   return isp0
 //emojis[getRandomInt(emojis.length)]
   }
 }

 function Area_check(para) {
   if(para=="中华民国"){
   return "台湾"
   } 
   else if(para=="台湾"){
   return "台湾"
   } 
   else if(para=="香港"){
   return "香港"
   } 
   else if(para=="俄罗斯联邦"){
   return "俄罗斯"
   } 
   else
   {
   return para
   }
 }
 function City_ValidCheck(regionName) {
   if(regionName=="Kowloon"){
   return "九龙"
   } 
   else if(regionName=="Central and Western District"){
   return "中西区"
   }
   else if(regionName=="臺灣省 or 台灣省"){
   return city0
   } 
   else if(regionName=="Moscow"){
   return "莫斯科"
   } 
   else if(regionName=="新加坡"){
   return city0
   } 
   else if(regionName=="Tuen Mun"){
   return "屯门"
   } 
   else if(regionName=="Tokyo"){
   return "东京"
   } 
   else if(regionName=="North"){
   return "北区"
   } 
   else if(regionName=="Tsuen Wan District"){
   return "荃湾"
   } 
   else if(regionName=="Yuen Long District"){
   return "元朗"
   } 
   else if(regionName=="Wan Chai"){
   return "湾仔"
   } 
   else if(regionName=="Eastern"){
   return "东区"
   } 
   else if(regionName=="Sha Tin"){
   return "沙田"
   } 
   else if(regionName=="Sai Kung District"){
   return "西贡"
   } 
   else if(regionName=="Changhua"){
   return "彰化"
   } 
   else if(regionName=="Taichung City"){
   return "台中"
   } 
   else if(regionName=="台北市"){
   return "台北"
   } 
   else if(regionName=="Khabarovsk"){
   return "伯力"
   } 
   else if(regionName=="St.-Petersburg"){
   return "圣彼得堡"
   } 
   else if(regionName=="New South Wales"){
   return "新南威尔士"
   } 
   else if(regionName=="Hesse"){
   return "黑森"
   } 
   else 
   {
   return regionName
   }
 }
 function Org_ValidCheck(para) { 
   if(para=="Microsoft Azure Cloud (eastasia)"){
   return "微软云"
   } 
   else if(para=="Chunghwa Telecom Co. Ltd."){
   return "中华电信" 
   }
   else if(para=="Alibaba.com LLC"){
   return "阿里云服务" 
   }
   else if(para=="Hong Kong Telecommunications (HKT) Limited"){
   return "香港电讯" 
   }
   else if(para=="DigitalOcean, LLC"){
   return "数字海洋" 
   }
   else if(para=="HGC Global Communications Limited"){
   return "环球电讯" 
   }
   else if(para=="PCCW Limited"){
   return "盈科电讯" 
   }
   else if(para=="AWS EC2 (us-west-2)"){
   return "亚马逊云" 
   }
   else if(para=="Newmedia Express PTE LTD"){
   return "新媒体快递" 
   }
   else if(para=="SonderCloud"){
   return "恒创电讯" 
   }
   else
   {
   return para
   }
 }

 var flags = new Map([[ "AC" , "🇦🇨" ] , [ "AF" , "🇦🇫" ] , [ "AI" , "🇦🇮" ] , [ "AL" , "🇦🇱" ] , [ "AM" , "🇦🇲" ] , [ "AQ" , "🇦🇶" ] , [ "AR" , "🇦🇷" ] , [ "AS" , "🇦🇸" ] , [ "AT" , "🇦🇹" ] , [ "AU" , "🇦🇺" ] , [ "AW" , "🇦🇼" ] , [ "AX" , "🇦🇽" ] , [ "AZ" , "🇦🇿" ] , [ "BB" , "🇧🇧" ] , [ "BD" , "🇧🇩" ] , [ "BE" , "🇧🇪" ] , [ "BF" , "🇧🇫" ] , [ "BG" , "🇧🇬" ] , [ "BH" , "🇧🇭" ] , [ "BI" , "🇧🇮" ] , [ "BJ" , "🇧🇯" ] , [ "BM" , "🇧🇲" ] , [ "BN" , "🇧🇳" ] , [ "BO" , "🇧🇴" ] , [ "BR" , "🇧🇷" ] , [ "BS" , "🇧🇸" ] , [ "BT" , "🇧🇹" ] , [ "BV" , "🇧🇻" ] , [ "BW" , "🇧🇼" ] , [ "BY" , "🇧🇾" ] , [ "BZ" , "🇧🇿" ] , [ "CA" , "🇨🇦" ] , [ "CF" , "🇨🇫" ] , [ "CH" , "🇨🇭" ] , [ "CK" , "🇨🇰" ] , [ "CL" , "🇨🇱" ] , [ "CM" , "🇨🇲" ] , [ "CN" , "🇨🇳" ] , [ "CO" , "🇨🇴" ] , [ "CP" , "🇨🇵" ] , [ "CR" , "🇨🇷" ] , [ "CU" , "🇨🇺" ] , [ "CV" , "🇨🇻" ] , [ "CW" , "🇨🇼" ] , [ "CX" , "🇨🇽" ] , [ "CY" , "🇨🇾" ] , [ "CZ" , "🇨🇿" ] , [ "DE" , "🇩🇪" ] , [ "DG" , "🇩🇬" ] , [ "DJ" , "🇩🇯" ] , [ "DK" , "🇩🇰" ] , [ "DM" , "🇩🇲" ] , [ "DO" , "🇩🇴" ] , [ "DZ" , "🇩🇿" ] , [ "EA" , "🇪🇦" ] , [ "EC" , "🇪🇨" ] , [ "EE" , "🇪🇪" ] , [ "EG" , "🇪🇬" ] , [ "EH" , "🇪🇭" ] , [ "ER" , "🇪🇷" ] , [ "ES" , "🇪🇸" ] , [ "ET" , "🇪🇹" ] , [ "EU" , "🇪🇺" ] , [ "FI" , "🇫🇮" ] , [ "FJ" , "🇫🇯" ] , [ "FK" , "🇫🇰" ] , [ "FM" , "🇫🇲" ] , [ "FO" , "🇫🇴" ] , [ "FR" , "🇫🇷" ] , [ "GA" , "🇬🇦" ] , [ "GB" , "🇬🇧" ] , [ "HK" , "🇭🇰" ] , [ "ID" , "🇮🇩" ] , [ "IE" , "🇮🇪" ] , [ "IL" , "🇮🇱" ] , [ "IM" , "🇮🇲" ] , [ "IN" , "🇮🇳" ] , [ "IS" , "🇮🇸" ] , [ "IT" , "🇮🇹" ] , [ "JP" , "🇯🇵" ] , [ "KR" , "🇰🇷" ] , [ "MO" , "🇲🇴" ] , [ "MX" , "🇲🇽" ] , [ "MY" , "🇲🇾" ] , [ "NL" , "🇳🇱" ] , [ "PH" , "🇵🇭" ] , [ "RO" , "🇷🇴" ] , [ "RS" , "🇷🇸" ] , [ "RU" , "🇷🇺" ] , [ "RW" , "🇷🇼" ] , [ "SA" , "🇸🇦" ] , [ "SB" , "🇸🇧" ] , [ "SC" , "🇸🇨" ] , [ "SD" , "🇸🇩" ] , [ "SE" , "🇸🇪" ] , [ "SG" , "🇸🇬" ] , [ "TH" , "🇹🇭" ] , [ "TN" , "🇹🇳" ] , [ "TO" , "🇹🇴" ] , [ "TR" , "🇹🇷" ] , [ "TV" , "🇹🇻" ] , [ "TW" , "🇨🇳" ] , [ "UA" , "🇺🇦" ] , [ "UK" , "🇬🇧" ] , [ "UM" , "🇺🇲" ] , [ "US" , "🇺🇸" ] , [ "UY" , "🇺🇾" ] , [ "UZ" , "🇺🇿" ] , [ "VA" , "🇻🇦" ] , [ "VE" , "🇻🇪" ] , [ "VG" , "🇻🇬" ] , [ "VI" , "🇻🇮" ] , [ "VN" , "🇻🇳" ]])
 var body = $response.body;
 var obj = JSON.parse(body);
 var title =flags.get(obj['countryCode']) +Area_check(obj['country'])+City_ValidCheck(obj['regionName']);
var subtitle =''+'-'+Org_ValidCheck(obj['org']);
var ip = obj['query'];
var description = '服务商:'+obj['isp'] +'\n'+'DNS:'+ obj['reverse'] +'\n'+'地区:' +City_ValidCheck(obj['regionName'])+obj['district']+'\n' +'洲际:'+obj['continent'] +'\n'+'IP:'+obj['query'] +'\n' +'托管:'+ obj['hosting'];
$done({title, subtitle, ip, description});
