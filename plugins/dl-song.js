const _0x439ee3=_0x32d0;(function(_0x2fe28a,_0x2c665a){const _0x41f804=_0x32d0,_0x2d0bf8=_0x2fe28a();while(!![]){try{const _0x3e6c9f=parseInt(_0x41f804(0xa4))/0x1+-parseInt(_0x41f804(0xa2))/0x2+parseInt(_0x41f804(0xad))/0x3+parseInt(_0x41f804(0xa0))/0x4+-parseInt(_0x41f804(0xb1))/0x5+parseInt(_0x41f804(0x9e))/0x6+parseInt(_0x41f804(0xb9))/0x7;if(_0x3e6c9f===_0x2c665a)break;else _0x2d0bf8['push'](_0x2d0bf8['shift']());}catch(_0x5ea972){_0x2d0bf8['push'](_0x2d0bf8['shift']());}}}(_0xcee7,0x4d6c2));function _0x32d0(_0x1ac305,_0x557f7a){const _0xcee731=_0xcee7();return _0x32d0=function(_0x32d02f,_0x51936a){_0x32d02f=_0x32d02f-0x99;let _0x23daf3=_0xcee731[_0x32d02f];return _0x23daf3;},_0x32d0(_0x1ac305,_0x557f7a);}function hi(){const _0x5af6aa=_0x32d0;console[_0x5af6aa(0xa9)](_0x5af6aa(0xaa));}hi();import _0x30d4f6 from'ytdl-core';import _0x48992d from'yt-search';import _0x4673de from'fs';import{pipeline}from'stream';import{promisify}from'util';import _0x2aa15e from'os';function _0xcee7(){const _0x362f3a=['1293065IDpGpF','song','command','chat','createWriteStream','sendMessage','audio/mp4','tmpdir','1013579uYZYLx','exp','unlink','âœ…Search\x20Results\x20For\x20\x22','diamond','audioonly','835758HrdETf','help','802116uspcZF','*Song\x20Not\x20Found,\x20Try\x20Another\x20Title*','410236ODxaCl','.mp3','231032xZYvug','reply','Deleted\x20Audio\x20File:\x20','title','*â¬‡ï¸ð™°ð™±ð™·ð™¸ðš‚ð™·ð™´ð™º-ðš‚ð™´ðš\x20Downloading\x20Your\x20SongðŸŽ§*','log','Hello\x20World!','map','Use\x20example\x20','195606VmKrTs','\x20<query>','downloader','videos'];_0xcee7=function(){return _0x362f3a;};return _0xcee7();}const streamPipeline=promisify(pipeline);var handler=async(_0x1a6c02,{conn:_0x35ae73,command:_0x456e9c,text:_0x314066,usedPrefix:_0x1c9415})=>{const _0xc92de2=_0x32d0;if(!_0x314066)throw _0xc92de2(0xac)+_0x1c9415+_0x456e9c+'\x20Heat\x20Waves\x20';await _0x1a6c02[_0xc92de2(0xa5)](_0xc92de2(0xa8));let _0x433d77=await _0x48992d(_0x314066+'\x20Song');if(!_0x433d77[_0xc92de2(0xb0)]['length'])throw _0xc92de2(0xa1);let _0x5a7b01=_0x433d77[_0xc92de2(0xb0)][0x0],{title:_0x5f18d6,thumbnail:_0xc92945,url:_0xa2326d}=_0x5a7b01,_0x2040d3=_0xc92de2(0x9b)+_0x314066+'\x20Song\x22:\x0a\x0a';for(let _0xe735c9=0x0;_0xe735c9<_0x433d77[_0xc92de2(0xb0)]['length'];_0xe735c9++){_0x2040d3+=_0xe735c9+0x1+'.\x20'+_0x433d77['videos'][_0xe735c9][_0xc92de2(0xa7)]+'\x0a';}_0x35ae73[_0xc92de2(0xb6)](_0x1a6c02[_0xc92de2(0xb4)],_0x2040d3,{'quoted':_0x1a6c02});const _0x694277=_0x30d4f6(_0xa2326d,{'filter':_0xc92de2(0x9d),'quality':'highestaudio'}),_0x41e039=_0x2aa15e[_0xc92de2(0xb8)](),_0x1cbfdf=_0x4673de[_0xc92de2(0xb5)](_0x41e039+'/'+_0x5f18d6+_0xc92de2(0xa3));await streamPipeline(_0x694277,_0x1cbfdf),await _0x1a6c02['reply']('*â¬†ï¸ð™°ð™±ð™·ð™¸ðš‚ð™·ð™´ð™º-ðš‚ð™´ðš\x20Uploading\x20Your\x20SongðŸŽ§*');let _0x5ba51a={'audio':{'url':_0x41e039+'/'+_0x5f18d6+'.mp3'},'mimetype':_0xc92de2(0xb7),'fileName':''+_0x5f18d6};await _0x35ae73[_0xc92de2(0xb6)](_0x1a6c02[_0xc92de2(0xb4)],_0x5ba51a,{'quoted':_0x1a6c02}),_0x4673de[_0xc92de2(0x9a)](_0x41e039+'/'+_0x5f18d6+_0xc92de2(0xa3),_0x1cdc5f=>{const _0x1a6ca3=_0xc92de2;_0x1cdc5f?console['error']('Failed\x20To\x20Delete\x20Audio\x20File:\x20'+_0x1cdc5f):console[_0x1a6ca3(0xa9)](_0x1a6ca3(0xa6)+_0x41e039+'/'+_0x5f18d6+_0x1a6ca3(0xa3));});};handler[_0x439ee3(0x9f)]=[_0x439ee3(0xb2)][_0x439ee3(0xab)](_0x102a80=>_0x102a80+_0x439ee3(0xae)),handler['tags']=[_0x439ee3(0xaf)],handler[_0x439ee3(0xb3)]=/^song$/i,handler[_0x439ee3(0x99)]=0x0,handler[_0x439ee3(0x9c)]=![];export default handler;
