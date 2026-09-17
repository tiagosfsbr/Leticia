export const siteConfig = {
  name: "Harmoniza DL",
  professional: "Letícia Radel de Carvalho",
  phone: "(47) 99117-1059",
  whatsapp: "5547991171059",
  address: "R. Blumenau, 2003 - Sala 10 - América, Joinville - SC, 89218-035",
  city: "Joinville - SC",
  instagram: "https://www.instagram.com/clinicaharmoniza_dl/",
  mapsEmbed:
    "https://www.google.com/maps?q=R.+Blumenau,+2003+-+Sala+10+-+Am%C3%A9rica,+Joinville+-+SC,+89218-035&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=R.+Blumenau,+2003+-+Sala+10+-+Am%C3%A9rica,+Joinville+-+SC,+89218-035",
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : `?text=${encodeURIComponent("Olá! Gostaria de agendar uma avaliação na Harmoniza DL.")}`;
  return base + text;
};