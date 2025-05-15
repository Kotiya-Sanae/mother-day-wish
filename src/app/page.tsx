'use client';

import { useState, useEffect } from 'react';
import { Heart, Flower, Sparkles, Gift, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';


 


export default function MothersDayPage() {
  const [heartsCount, setHeartsCount] = useState(0);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    setShowHearts(heartsCount === blessings.length);
  }, [heartsCount]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100">
      {/* 旋转花朵动画背景 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Flower 
            key={i}
            className="absolute text-pink-200 animate-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* 主要内容 */}
      <main className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center">
        
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          母亲节快乐
          <Sparkles className="inline ml-2 text-yellow-400 animate-spin" />
        </h1>

        
        <p className="text-xl text-gray-700 mb-12 text-center max-w-2xl">
          亲爱的妈妈，感谢您无私的爱与付出。在这个特别的日子里，我想对您说...
        </p>

        {/* 祝福卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {blessings.map((blessing, index) => (
            <BlessingCard
              key={index}
              {...blessing}
              onHeartChange={(hearted) => {
                setHeartsCount(prev => hearted ? prev + 1 : prev - 1);
              }}
            />
          ))}
        </div>

        {/* 特别消息按钮 */}
        <div className="mt-16">
          <Button variant="outline" className="group">
            <span className="group-hover:hidden">点击查看特别消息</span>
            <span className="hidden group-hover:inline-flex items-center">
              我爱您，妈妈! <Heart className="ml-2 fill-pink-500 text-pink-500" />
            </span>
          </Button>
        </div>
      </main>

      <footer className="relative z-10 py-6 text-center text-gray-600">
        <p>Made with <Heart className="inline fill-pink-500 text-pink-500" /> for you, Mom</p>
      </footer>
      {/* 爱心雨彩蛋 */}
      {showHearts && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
          {[...Array(420)].map((_, i) => {
            const isFilled = Math.random() < 0.2; // 10%概率生成实心爱心
            const isGolden = Math.random() < 0.05; 
            const isTeal = Math.random() <0.03;
            return (
              <Heart
                key={`heart-${i}`}
                className={`absolute animate-heart-rain ${isTeal ? 'text-teal-300 fill-teal-300':isGolden ? 'text-yellow-300 fill-yellow-300' : isFilled ? 'text-pink-500 fill-pink-500' : 'text-pink-500'}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-10%`,//`${Math.random() * -100}%`,  // 从屏幕上方随机位置开始
                  fontSize: `${Math.random() * 24 + 16}px`,
                  opacity: Math.random() * 0.5 + 0.5,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 5}s`  // 更分散的出现时间
                }}
              />
            );
          })
        }
        </div>
      )}
    </div>
  );
}

const blessings = [
  {
    title: "无私的爱",
    description: "感谢您无条件的爱与支持，让我能够勇敢追梦。",
    icon: <Heart className="w-8 h-8 text-pink-500 fill-pink-100" />
  },
  {
    title: "温暖的港湾",
    description: "您的怀抱永远是我最安心的避风港。",
    icon: <Home className="w-8 h-8 text-blue-500 fill-blue-100" />
  },
  {
    title: "美丽的榜样",
    description: "您的坚强与善良是我一生学习的榜样。",
    icon: <Flower className="w-8 h-8 text-purple-500 fill-purple-100" />
  },
  {
    title: "耐心的教导",
    description: "感谢您教会我如何面对生活的挑战。",
    icon: <Sparkles className="w-8 h-8 text-yellow-500 fill-yellow-100" />
  },
  {
    title: "永恒的祝福",
    description: "愿健康和快乐永远伴随着您。",
    icon: <Gift className="w-8 h-8 text-green-500 fill-green-100" />
  },
  {
    title: "感恩的心",
    description: "我永远感激您为我付出的一切。",
    icon: <Heart className="w-8 h-8 text-red-500 fill-red-100" />
  },
];

function BlessingCard({
  title,
  description,
  icon,
  onHeartChange
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  onHeartChange: (hearted: boolean) => void;
}) {
  const [isHearted, setIsHearted] = useState(false);

  const handleClick = () => {
    const newHearted = !isHearted;
    setIsHearted(newHearted);
    onHeartChange(newHearted);
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
        <div className="p-2 rounded-full bg-white shadow-sm">
          {icon}
        </div>
        <div>
          <CardTitle className="text-lg text-pink-600">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button 
          variant="ghost" 
          className="text-pink-500 hover:text-pink-600"
          onClick={handleClick}
        >
          点击发送爱心{' '}
          <Heart 
            className={`ml-2 w-4 h-4 transition-all duration-300 ${isHearted ? 'fill-pink-500 text-pink-500 heart-filled' : 'text-pink-300'}`}
          />
        </Button>
      </CardFooter>
    </Card>
  );
}