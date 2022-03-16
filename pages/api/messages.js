import messages from "./messages.json";

export default function handler(req, res) {
  res.status(200).json(messages);
}
