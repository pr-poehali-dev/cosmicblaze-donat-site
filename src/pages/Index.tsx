import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Rank {
  id: string;
  name: string;
  price: number;
  color: string;
  features: string[];
  badge: string;
}

const ranks: Rank[] = [
  {
    id: 'vip',
    name: 'VIP',
    price: 299,
    color: 'from-green-500 to-emerald-600',
    badge: '⭐',
    features: [
      'Цветной ник в чате',
      'Приватная зона /warp vip',
      '5 точек дома /sethome',
      'Доступ к /fly на 30 минут в день',
      'Скидка 10% в донат-магазине'
    ]
  },
  {
    id: 'titan',
    name: 'TITAN',
    price: 3999,
    color: 'from-yellow-500 to-amber-600',
    badge: '⚡',
    features: [
      'Всё из VIP',
      'Титанический префикс [TITAN]',
      'Неограниченные привилегии',
      'Бессмертие во всех режимах',
      'Эксклюзивный кит /kit titan',
      'До 5 варпов с кастомными названиями',
      'Личный приват 500x500',
      'Админские команды',
      'Скидка 75% в донат-магазине',
      'Персональный Discord канал',
      'Уникальные частицы и эффекты',
      'Возможность создавать ивенты'
    ]
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: 599,
    color: 'from-blue-500 to-cyan-600',
    badge: '💎',
    features: [
      'Всё из VIP',
      'Уникальный префикс [PREMIUM]',
      '10 точек дома',
      'Неограниченный /fly',
      'Доступ к кит /kit premium',
      'Приоритетный вход на сервер',
      'Скидка 20% в донат-магазине'
    ]
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: 999,
    color: 'from-purple-500 to-pink-600',
    badge: '👑',
    features: [
      'Всё из PREMIUM',
      'Эксклюзивный префикс [ELITE]',
      '20 точек дома',
      'Команда /god (режим бога)',
      'Доступ к киту /kit elite',
      'Возможность создать варп',
      'Личный приват 100x100',
      'Скидка 30% в донат-магазине'
    ]
  },
  {
    id: 'legend',
    name: 'LEGEND',
    price: 1999,
    color: 'from-orange-500 to-red-600',
    badge: '🔥',
    features: [
      'Всё из ELITE',
      'Легендарный префикс [LEGEND]',
      'Неограниченные точки дома',
      'Полёт в PvP-зонах',
      'Эксклюзивный кит /kit legend',
      'Собственный варп с кастомным названием',
      'Личный приват 200x200',
      'Возможность создать свой режим игры',
      'Скидка 50% в донат-магазине',
      'Доступ к закрытому Discord каналу'
    ]
  }
];

const rules = [
  { title: 'Запрещён читерство', desc: 'Использование любых модификаций для получения преимущества' },
  { title: 'Уважайте игроков', desc: 'Оскорбления, токсичность и спам караются баном' },
  { title: 'Не гриферьте', desc: 'Разрушение чужих построек строго запрещено' },
  { title: 'Запрещена реклама', desc: 'Реклама других серверов приводит к перманентному бану' },
  { title: 'Соблюдайте честную игру', desc: 'Использование багов и дюпов — банабельно' }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedRank, setSelectedRank] = useState<string | null>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/eb7312cf-992e-4f79-b404-9d677c1d508c/files/90417eb1-518e-4c7d-a369-7a56e7a4dbf1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-3xl animate-float">🚀</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                CosmicBlaze
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {['home', 'donate', 'rules', 'online', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'donate' && 'Донаты'}
                  {section === 'rules' && 'Правила'}
                  {section === 'online' && 'Онлайн'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-effect">
              <Icon name="Zap" size={16} className="mr-2" />
              Играть
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-primary to-secondary mb-4 animate-pulse-glow">
                🌟 Лучший сервер 2024
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                COSMIC
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                BLAZE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Эпический космический сервер с уникальными режимами, привилегиями и активным комьюнити
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-effect hover-glow"
                onClick={() => scrollToSection('donate')}
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Купить донат
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10"
              >
                <Icon name="Info" size={20} className="mr-2" />
                Подробнее
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
              <Card className="bg-card/50 backdrop-blur hover-glow">
                <CardHeader>
                  <div className="text-4xl mb-2">👥</div>
                  <CardTitle>2000+</CardTitle>
                  <CardDescription>Активных игроков</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/50 backdrop-blur hover-glow">
                <CardHeader>
                  <div className="text-4xl mb-2">🎮</div>
                  <CardTitle>10+</CardTitle>
                  <CardDescription>Уникальных режимов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/50 backdrop-blur hover-glow">
                <CardHeader>
                  <div className="text-4xl mb-2">⚡</div>
                  <CardTitle>99.9%</CardTitle>
                  <CardDescription>Аптайм сервера</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="donate" className="min-h-screen py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Выбери свой ранг
              </h2>
              <p className="text-xl text-muted-foreground">
                Получи эксклюзивные возможности и преимущества на сервере
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ranks.map((rank, index) => (
                <Card
                  key={rank.id}
                  className={`relative overflow-hidden backdrop-blur hover-glow cursor-pointer transition-all ${
                    selectedRank === rank.id ? 'ring-2 ring-primary scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedRank(rank.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${rank.color} opacity-10`} />
                  <CardHeader className="relative">
                    <div className="text-5xl mb-2">{rank.badge}</div>
                    <CardTitle className="text-2xl">{rank.name}</CardTitle>
                    <div className="text-3xl font-bold mt-2">
                      <span className={`bg-gradient-to-r ${rank.color} bg-clip-text text-transparent`}>
                        {rank.price}₽
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="relative space-y-3">
                    {rank.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    <Button 
                      className={`w-full mt-4 bg-gradient-to-r ${rank.color} hover:opacity-90`}
                    >
                      Купить {rank.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="rules" className="min-h-screen py-20 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Правила сервера
              </h2>
              <p className="text-xl text-muted-foreground">
                Соблюдай правила и наслаждайся игрой без ограничений
              </p>
            </div>

            <div className="space-y-4">
              {rules.map((rule, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur hover-glow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold glow-effect">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{rule.title}</CardTitle>
                        <CardDescription className="text-base">{rule.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="online" className="min-h-screen py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Сервер онлайн
              </h2>
              <p className="text-xl text-muted-foreground">
                Следи за статистикой и активностью сервера в реальном времени
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/50 backdrop-blur glow-effect">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Users" size={24} className="text-primary" />
                    <span>Игроков онлайн</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    0<span className="text-2xl text-muted-foreground">/2500</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur glow-effect-blue">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Activity" size={24} className="text-accent" />
                    <span>Статус сервера</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-red-500" />
                    <span className="text-2xl font-bold text-red-500">OFFLINE</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Сервер выключен</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>IP для подключения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
                  <code className="text-2xl font-mono text-primary">mc-Cosmicblaze.aternos.me</code>
                  <Button variant="outline" size="sm">
                    <Icon name="Copy" size={16} className="mr-2" />
                    Копировать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contacts" className="min-h-screen py-20 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Контакты
              </h2>
              <p className="text-xl text-muted-foreground">
                Свяжись с нами любым удобным способом
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur hover-glow cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-4">💬</div>
                  <CardTitle>Discord</CardTitle>
                  <CardDescription>Присоединяйся к нашему комьюнити</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4]">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Открыть Discord
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur hover-glow cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-4">✉️</div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Задай вопрос администрации</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Icon name="Mail" size={16} className="mr-2" />
                    support@cosmicblaze.ru
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur hover-glow cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-4">📱</div>
                  <CardTitle>ВКонтакте</CardTitle>
                  <CardDescription>Новости и обновления</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-[#0077FF] hover:bg-[#0066DD]">
                    <Icon name="Share2" size={16} className="mr-2" />
                    Группа ВК
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur hover-glow cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-4">📺</div>
                  <CardTitle>YouTube</CardTitle>
                  <CardDescription>Обзоры и летсплеи</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-[#FF0000] hover:bg-[#CC0000]">
                    <Icon name="Youtube" size={16} className="mr-2" />
                    Канал YouTube
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <footer className="relative z-10 bg-background/95 backdrop-blur border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="text-2xl">🚀</div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CosmicBlaze
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 CosmicBlaze. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Minecraft является торговой маркой Mojang AB
          </p>
        </div>
      </footer>
    </div>
  );
}