import { getEnvironment } from "./environment";

const BASE_URL = {
  local: "https://localhost:3000",
  development: "https://www.dev.nav.no",
  production: "https://www.nav.no",
};

const DITT_NAV = {
  local: "https://localhost:3000/person/dittnav",
  development: "https://www.dev.nav.no/person/dittnav",
  production: "https://www.nav.no/person/dittnav",
};

const SOKNAD_OG_SKJEMA = {
  local: "https://localhost:3000/ettersendelse",
  development: "https://www.dev.nav.no/ettersendelse",
  production: "https://www.nav.no/ettersendelse",
};

export const baseUrl = BASE_URL[getEnvironment()];
export const dittNavUrl = DITT_NAV[getEnvironment()];
export const soknadOgSkjemaUrl = SOKNAD_OG_SKJEMA[getEnvironment()];

export const dittNavVarslingerUrl = `${dittNavUrl}/varslinger`;
export const kontaktOssUrl = "https://www.nav.no/person/kontakt-oss";
export const skrivTilOssUrl = `${baseUrl}/person/kontakt-oss/skriv-til-oss`;
export const sosialHjelpUrl = `${baseUrl}/sosialhjelp/innsyn/`;

export const lenkeliste = [
  {
    tittel: "Kontakt oss",
    url: kontaktOssUrl,
  },
  {
    tittel: "Skriv til oss",
    url: skrivTilOssUrl,
  },
  {
    tittel: "Økonomisk sosialhjelp",
    url: sosialHjelpUrl,
  },
];
