type WhatsappPayload = {
  name: string;
  attending: boolean;
  guests: number;
  note?: string;
};

const PHONE_NUMBER = "50378851556";

const formatMessage = ({ name, attending, guests, note }: WhatsappPayload) => {
  const status = attending ? "Sí, asistiré" : "No podré asistir";
  const lines = [
    `¡Hola Carlos! Soy ${name}.`,
    `Confirmación: ${status}`,
    `Invitados: ${guests}`,
    note ? `Notas: ${note}` : undefined,
  ].filter(Boolean);

  return lines.join("\n");
};

export const buildWhatsappUrl = (payload: WhatsappPayload) => {
  const message = encodeURIComponent(formatMessage(payload));
  return `https://wa.me/${PHONE_NUMBER}?text=${message}`;
};

