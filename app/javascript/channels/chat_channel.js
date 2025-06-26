import consumer from "channels/consumer"

const chatChannel = consumer.subscriptions.create(
  {channel: "ChatChannel", room: "general"},
  {
    received(data) {
      console.log("Message reçu :", data);
    },
    sendMessage(message) {
      this.perform("receive", {message});
    }
  }
);

// Exemple d'envoie de message
chatChannel.sendMessage("Salut tout le monde !");