import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center mt-32 z-10">
      <Link target="_blank" href={"https://github.com/exosky12"} className="cursor-pointer flex items-center bg-[#41403E] rounded-full px-4 py-2 border uppercase"><span className="font-medium text-[16px]">Crée par un élève pour les élèves</span></Link>
      <div>
        <h1 className="text-[82px] font-bold text-center">
          <span className="text-[#1D4ED8] font-black">Simplifiez</span> votre aprentissage, <br /><span className="text-[#1D4ED8] font-black">dépassez</span> vos limites.</h1>
          <Image className="relative bottom-[140px] right-5"
            src="/trait1.png"
            width={424}
            height={24}
            alt="Picture of the author"
          />
          <Image className="relative bottom-[45px] left-40"
          src="/trait2.png"
          width={370}
          height={24}
          alt="Picture of the author"
          />
      </div>
      <div className={"borderBtn cursor-pointer flex items-center bg-white rounded-full px-4 py-2 gap-2"}>
        <Image
          src="/rocket.svg"
          width={24}
          height={24}
          alt="Picture of the author"
        />
        <Link className="font-medium text-[18px] text-black" href="/apprentissage">
          Commencer l&apos;apprentissage
        </Link>
      </div>
      <div className="mt-10">
        <Image
            src="/landingExample.png"
            width={1138}
            height={890}
            alt="Picture of the author"
          />
      </div>
      <Image className="absolute bottom-0 z-[-1]"
            src="/blur.png"
            width={2459}
            height={915}
            alt="Picture of the author"
      />
       <div className="mt-[382px] flex flex-row items-center">
        <div className="w-4/6	">
          <Image
                src="/landingExample2.png"
                width={700}
                height={500}
                alt="Picture of the author"
          />
        </div>
        <ul className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-2">
            <Image
                src="/plus.png"
                width={32}
                height={32}
                alt="Picture of the author"
            />
            <li className="font-normal text-[20px]">Devenez plus efficace dans vos révisions</li>
          </div>
          <div className="flex items-center gap-2">
            <Image
                src="/trending.png"
                width={32}
                height={32}
                alt="Picture of the author"
            />
            <li className="font-normal text-[20px]">Augmentez vos résultats</li>
          </div>
          <div className="flex items-center gap-2">
            <Image
                src="/note.png"
                width={32}
                height={32}
                alt="Picture of the author"
            />
            <li className="font-normal text-[20px]">Faites vos propres fiches en moins de 5 minutes</li>
          </div>
        </ul>
      </div>
      <div className="mt-[382px] flex flex-col w-4/6 gap-8 items-center">
        <div>
          <h2 className="text-[52px] text-center font-bold">Ne perdez plus <span className="text-[#1D4ED8] font-black">une minute</span> dans vos révisions</h2>
          <Image className="relative bottom-3 left-[370px]"
            src="/trait3.png"
            width={274}
            height={24}
            alt="Picture of the author"
          />
        </div>
        <p className="text-[20px] w-5/6 font-normal text-center">En tant qu’élève je sais ce que c’est de passer des heures et des heures à <span className="text-[#1D4ED8] font-bold">faire des fiches de révisions</span>, il faut regrouper les différents <span className="text-[#1D4ED8] font-bold">cours</span>, <span className="text-[#1D4ED8] font-bold">exercices</span> et <span className="text-[#1D4ED8] font-bold">méthodes</span> qui sont souvent pas centralisés au même endroit <br /><br />C’est pour ça que j’ai créé <span className="font-bold">Edu<span className="text-[#1D4ED8]">Tech</span></span>, tout est <span className="text-[#1D4ED8] font-black">centralisé</span> pour vous faire <span className="text-[#1D4ED8] font-black">gagner du temps</span> et <span className="text-[#1D4ED8] font-black">apprendre plus efficacement</span></p>
      </div>
      <div className="mt-[382px] flex flex-row items-center justify-center">
        <div className="w-2/6 flex flex-col gap-8">
          <h2 className="font-normal leading-tight text-[48px]"><span className="text-[#1D4ED8] font-bold">Annotez vos cours</span> avec la même simplicité que sur une feuille</h2>
          <Image className="relative bottom-[155px]"
            src="/trait4.png"
            width={414}
            height={24}
            alt="Picture of the author"
          />
          <p className="text-[18px]">Je sais à quel point il est pratique de pouvoir <span className="text-[#1D4ED8] font-bold">gribouiller</span>, <span className="text-[#1D4ED8] font-bold">annoter</span>, <span className="text-[#1D4ED8] font-bold">rajouter des schémas</span> par <span className="text-[#1D4ED8] font-bold">un seul coup de crayon</span> sur une feuille, c’est pourquoi j’ai intégré une expérience d’annotation aussi pratique que si vous étiez sur une feuille</p>
        </div>
          <Image
                src="/landingExample3.png"
                width={700}
                height={500}
                alt="Picture of the author"
          />
      </div>
      <div className="mt-[382px] text-center items-center flex flex-col gap-4">
        <div>
          <h2 className="text-[52px]"><span className="font-bold">Edu<span className="text-[#1D4ED8]">Tech</span></span> est un projet <span className="text-[#1D4ED8] font-bold">100% gratuit!</span></h2>
          <Image className="relative left-[520px] bottom-3"
            src="/trait5.png"
            width={314}
            height={24}
            alt="Picture of the author"
          />
          <span className="font-light text-[22px]">(pour le moment)</span>
        </div>
        <p className="text-[18px] w-4/6">En effet, pour le moment vous pouvez profiter du projet <span className="text-[#1D4ED8] font-bold">100% gratuitement</span> ! <span className="text-[#1D4ED8] font-bold">Aucun prix</span>, <span className="text-[#1D4ED8] font-bold">aucun abonnement</span>, <span className="text-[#1D4ED8] font-bold">aucune restriction</span> quand au nombre de cours
<br />Dans le futur le projet pourrait  s’appuyer sur le principe du Freemium</p>
      </div>
      <div className="flex flex-row mt-[222px] items-center align-center justify-center">
          <div className="items-center w-2/6">
            <h2 className="text-[52px] font-normal">Créateur d’<span className="font-bold">Edu<span className="text-[#1D4ED8]">Tech</span></span></h2>
            <span className="text-[18px] font-light">Merienne Jules (Exosky12), apprenti développeur et designer </span> <br/> <br/>
            <p>J’ai 17 ans, ça fait 1 an que je conçois des applications web et 3 ans que j’en développe. Actuellement en terminale, j’aimerais faire des études d’ingénieur informatique. <br />Je suis <span className="text-[#1D4ED8] font-bold">le développeur et le designer de ce projet.</span></p> <br/> Ayant toujours eu des facilités à l’école, je n’ai jamais vraiment travaillé, j’ai donc eu du mal à trouver une <span className="text-[#1D4ED8] font-bold">stratégie</span> et une <span className="text-[#1D4ED8] font-bold">méthode de travail</span> adaptées à <span className="text-[#1D4ED8] font-bold">mes besoins</span>. Je trouvais trop compliqué le fait de chercher dans différentes pages de différents cahiers pour essayer de faire une <span className="text-[#1D4ED8] font-bold">fiche de révision complète.</span><br/>C’est donc comme ça qu’est née l’idée d’ <span className="font-bold">Edu<span className="text-[#1D4ED8]">Tech.</span></span>
          </div>
          <div>
            <Image
                  src="/whoami.png"
                  width={550}
                  height={536}
                  alt="Picture of the author"
            />
          </div>
      </div>
      <div className="w-10/12 min-h-[377px] banner flex flex-col gap-12 items-center justify-center text-center mt-[282px]">
        <h2 className="text-[42px] w-2/4 font-normal">Vous voulez <span className="text-[#1D4ED8] font-bold">simplifier</span> votre apprentissage et <span className="text-[#1D4ED8] font-bold">dépasser</span> vos limites ?</h2>
        <div className={"borderBtn cursor-pointer flex items-center bg-white rounded-full px-4 py-2 gap-2"}>
          <Image
            src="/rocket.svg"
            width={24}
            height={24}
            alt="Picture of the author"
          />
          <Link className="font-medium text-[18px] text-black" href="/apprentissage">
            Commencer l&apos;apprentissage
          </Link>
      </div>
      </div>
    </div>
  );
}
