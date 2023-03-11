export type TLang = "fr" | "en" | "es";

export type ImageCarousel = {
  fr: string;
  es: string;
  en: string;
  url: string;
};

export type JsonLink = {
  en: TLang;
  es: TLang;
  fr: TLang;
  link: string;
};


export type LangDesc = {
  id: TLang;
  name:string;
  desc: string;
  url: string;
};



export type JsonService = {
  en: string[] ;
  es: string[] ;
  fr: string[] ;
  link: string;
};
export type ThreeLang={
  en: string ;
  es: string ;
  fr: string ;

}

export type TscreenText={
  en: string ;
  es: string ;
  fr: string ;
  key: string ;

}



export type TService = {
  title : ThreeLang;
  prelude :ThreeLang;
  epilog : ThreeLang;
  image : ThreeLang;
  alt :ThreeLang;
}

export type TPackage = {
  title : ThreeLang;
  description :ThreeLang;
  price : ThreeLang;
  image : ThreeLang;
  alt :ThreeLang;
 
}


export type TSubject = {
  title : ThreeLang;
  prelude :ThreeLang;
  epilog : ThreeLang;
  image : ThreeLang;
  alt :ThreeLang;
 
}
