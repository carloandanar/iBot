module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	cooldown: 3,
	description: 'Gets the avatar URL of the tagged user(s), or just your own avatar.',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;
		});

		message.channel.send(avatarList);
	},
};