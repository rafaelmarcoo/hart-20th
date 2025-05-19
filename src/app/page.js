'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const sampleNotes = [
  {
    id: 1,
    name: "Clarissa",
    content: "happy birthday, hart!! what a pleasure it has been to get to know you in the last few months. your humor has brightened up days that are weighed down by the pressures of work; your attention to detail is much appreciated; and your commitment to capturing the moment has given us memories we can cherish for a lifetime. it means a lot to us that you love what you do. keep going. we will always support you 💗 welcome to your 20s, and i hope it treats you well.",
    color: 'bg-primary',
  },
  {
    id: 2,
    name: "Vesi",
    content: "Happy Birthday to our main camera man hope you have a blessed day today, wishing you the best in life, so happy to be one of your friend, will forever rooting for you and cherish all the moment and memories we all make together🥰",
    color: 'bg-secondary',
  },
  {
    id: 3,
    name: "Keven",
    content: "happy birthday kuya hart!! 😼  so happy to have met you at student ambassador, you omit AURA wherever you go your positive vibes. will forever cheer you on and i look forward to see what you get up to next and we should hang soon 🙂‍↕️ \n\n all the best and cheers to a happy 20th,",
    color: 'bg-accent',
  },
  {
    id: 4,
    name: "Matthew",
    content: "happy birthday, hartheu!! so grateful that I've got the chance to meet a reliable and optimistic person like you in this lifetime. Please know that we are beyond proud of you because we always see the effort and dedication you put into your work. Continue to inspire people through your cute drawings and letters you always make for RUOK, and also the unhinged tiktoks you send me 😭 we're always here to accompany you when life gets tough. always, in all ways!! 🫶\n\nsincerely,\nmatthew ❤️",
    color: 'bg-primary',
  },
  {
    id: 5,
    name: "Francis",
    content: "to one of the most energetic & funniest ppl ik, happy happy birthday hart. we've only known each other for a couple months but u've alr become such a comforting & familiar presence in my ambassador journey. i truly admire ur passion in capturing moments cos it's such a beautiful way to let others see the world thru ur eyes, theres sumn so special in how u find beauty even in da smallest things so pls keep in doing that. happy 20th kuya hart\n\n cisco xx",
    color: 'bg-secondary',
  },
  {
    id: 6,
    name: "Chelsey",
    content: "happy happy 20th birthday Hart!! we haven't interacted as much but I've always admired how creative and genuine u are - it's really clear that u put a lot of heart into what u do, and i also thought u were cool back during ambassador training. hope u have a noice day today. wishing u all the best po for the years ahead !!",
    color: 'bg-accent',
  },
  {
    id: 7,
    name: "Jahnah",
    content: "HAPPY BIRTHDAY HARTYHARHART 🙂‍↕️🙂‍↕️ finally getting to know you better after the past year of knowing of you is honestly such a blessing 😌 finding out that this cool looking cool guy in the media team is hilarious and lowkey crazy just made him a whole lot cooler 😎 in this 20th year of yours I hope it's filled with incredible events that your creative self can capture and keep close to your heart ✨️\n\nstay you, stay slaying ‼️‼️\njananana",
    color: 'bg-primary',
  },
  {
    id: 8,
    name: "Erylle",
    content: "happy born-to-slay-day, 🎱 partner‼️ we may hav been trashed once but you are never trash 😤 you're the clown that's never going down, i always forget you're a kuya LOL love the way you capture memories into forever films 🥺 you got a talent to touch hearts (badum tss omg self love?? 😳 ok ill stop) can't wait for more hangouts and shenanigans in your years to come 🤩 HIP-HIP-HART-DAY‼️\n\nstay cray, stay slay, you're twentay 😼\n— erylle",
    color: 'bg-secondary',
  },
  {
    id: 9,
    name: "Rafael",
    content: "happy birthday brotha 🖤 i am very very glad to have met you. the way we match energy and vibes iz krazy ‼️ from the most random shi we be doing to the deep talks and to the dumbest moments 🖤 looking forward to making hella more memories, more chaos and more tiktoks HAHAHHA 😮‍💨\n\nno matter what, never ever stop smiling and never ever stop being you ! always remember that no matter what life throws at you, we always got your back. no matter what. 🖤\n\nmuch love,\nmogging #1 / dumber / raf\n\n\nalso, no, 20 isn't unc status",
    color: 'bg-accent',
  },
  {
    id: 10,
    name: "Zee",
    content: "HART, happy freakin&apos; birthday!! 💛 You might drive me insane sometimes, but real talk—you&apos;re one of the most amazing, down-to-earth, and hilarious people I&apos;ve ever met. You&apos;re a whole vibe, always bringing the energy and making everyone&apos;s day better.You&apos;re so selfless, always putting others first, and even with everything you&apos;ve been through, you still manage to shine. You deserve all the happiness in the world, no cap. And just know, we&apos;ve always got your back. Be your crazy, authentic self around us because we&apos;re here for you no matter what.Can&apos;t wait for all the chaotic, iconic memories we&apos;re about to make—annoying each other, laughing like maniacs, and just being our crazy selves.\n\nP.S. This is the one and only day I&apos;m being nice to you, so soak it up. imma annoy you again tmr. 😤😝",
    color: 'bg-primary',
  },
  {
    id: 11,
    name: "Zamir",
    content: "happy birthday, hart! it hasn't been a long time since we've known each other but meeting you has definitely changed me. i know you didn't think much of how carried yourself on that day the group went to miguelito's, but i will always remember how you talked about your experiences so freely. this, in return, gave me the courage to confide in mine as well ,and now i feel the freest i've been in years—all because of you.\n\nit is such an honour to be inspired by someone like you, hart; and i hope that, despite every hurdle in life, you will still see it in yourself to be true to who you are. however, on those days that you doubt yourself, never hesitate to talk to me or to anyone here. we will always be here to remind you of your worth and what you are to us. thank you for being in my life, hart! you are worthy of love, always.\n\nyours truly,\ndav",
    color: 'bg-secondary',
  },
  {
    id: 12,
    name: "Daniel",
    content: "Happy Birthday Hart. Thank you for all the amazing things you have done for the student ambassador group as well as our ambassador friend group. Though I haven't known you for a very long time, it seems like I have known for a very long time. You have always been open about everything and are willing to get to know others which has created a safe space for many of us. You always bring laughter, joy and fun to all the events and hangouts we have shared over the last few months. Your amazing videography/photography skills do not go unnoticed and we are truly honored and glad for you to be in our group. Keep up the good work, all the best to your studies. Dont ever loose sight of the end goal. If you ever feel down or need someone to talk to, dont be afraid to come and talk to us, we are their to support you. Once again, thank you for all that you have done and may the year ahead be one filled with good memories, good health, and lots of presents.\n\nFrom Daniel",
    color: 'bg-accent',
  },
  {
    id: 13,
    name: "Kirby",
    content: "yo shttt happy bday dawg",
    color: 'bg-accent',
  }
];

function getTextColor(bg) {
  return bg === 'bg-accent' ? 'text-white' : 'text-dark';
}

export default function WallOfNotes() {
  const [openNote, setOpenNote] = useState(null);
  const router = useRouter();

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenNote(null);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-12 px-4 relative overflow-hidden font-lobster">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] -top-96 -left-96 bg-primary/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute w-[800px] h-[800px] -bottom-96 -right-96 bg-secondary/10 rounded-full blur-[100px] animate-float-delayed"></div>
        <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/10 rounded-full blur-[80px] animate-pulse"></div>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-7xl sm:text-8xl text-dark font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-gradient tracking-wide">
          Hart's 20th
        </h1>
        <p className="text-3xl text-dark tracking-wide subtitle-glow-strong">Birthday Wishes Wall</p>
      </div>
      
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
        {sampleNotes.map((note) => {
          const textColor = getTextColor(note.color);
          return (
            <button
              key={note.id}
              className={`group rounded-2xl shadow-xl p-8 h-52 flex flex-col justify-between cursor-pointer transition-all duration-500 ${note.color} hover:scale-105 hover:shadow-2xl active:scale-95 backdrop-blur-sm border border-dark/10 hover:border-dark/20`}
              onClick={() => setOpenNote(note)}
            >
              <div className="flex items-center gap-2 mb-4 justify-center">
                <span className={`text-3xl ${textColor} text-center w-full group-hover:scale-105 transition-transform duration-300`}>{note.name}</span>
              </div>
              <span className={`${textColor} text-xl line-clamp-3 text-center group-hover:scale-105 transition-transform duration-300`}>{note.content}</span>
            </button>
          );
        })}
      </div>

      {openNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 backdrop-blur-lg" onClick={handleModalClick}>
          <div className={`relative max-w-md w-full mx-4 p-10 rounded-2xl shadow-2xl ${openNote.color} animate-pop-in border border-dark/20 max-h-[80vh] overflow-y-auto`}>
            <button
              className={`absolute top-4 right-4 text-3xl ${getTextColor(openNote.color)} hover:opacity-80 transition-opacity font-bold`}
              onClick={() => setOpenNote(null)}
              aria-label="Close note"
            >
              ×
            </button>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <span className={`text-4xl ${getTextColor(openNote.color)} text-center w-full`}>{openNote.name}</span>
            </div>
            <p className={`text-2xl whitespace-pre-line ${getTextColor(openNote.color)} text-center leading-relaxed`}>{openNote.content}</p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

        :root {
          --color-background: #E7FBB4;
          --color-primary: #638C6D;
          --color-secondary: #DF6D2D;
          --color-accent: #C84C05;
          --color-dark: #2D2D2D;
        }
        
        .bg-background { background-color: var(--color-background); }
        .bg-primary { background-color: var(--color-primary); }
        .bg-secondary { background-color: var(--color-secondary); }
        .bg-accent { background-color: var(--color-accent); }
        .text-dark { color: var(--color-dark); }
        
        .font-lobster {
          font-family: 'Lobster', cursive;
        }
        
        .animate-pop-in {
          animation: pop-in 0.4s cubic-bezier(.4,2,.6,1) both;
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 12s ease-in-out infinite;
          animation-delay: -6s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        
        @keyframes pop-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(50px, 50px) rotate(5deg); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .subtitle-glow {
          text-shadow: 0 2px 8px #fff, 0 1px 0 #fff;
        }

        .subtitle-glow-strong {
          text-shadow: 0 2px 12px #fff, 0 1px 0 #fff, 0 0 2px #638C6D, 0 0 1px #2D2D2D;
        }
      `}</style>
    </div>
  );
} 