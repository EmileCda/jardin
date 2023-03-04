export type Lang = "fr" | "en" | "pr";

export type ImageCarousel = {
  fr: string;
  pr: string;
  en: string;
  url: string;
};

export type JsonLink = {
  en: Lang;
  pr: Lang;
  fr: Lang;
  link: string;
};


export type LangDesc = {
  id: Lang;
  name:string;
  desc: string;
  url: string;
};



export type JsonService = {
  en: string[] ;
  pr: string[] ;
  fr: string[] ;
  link: string;
};

export type ThreeLang={
  en: string ;
  pr: string ;
  fr: string ;

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
