import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from '@/components/ui/icon';

export default function Index() {
  const ucPackages = [
    { id: 1, amount: "60", price: "59", bonus: "", popular: false, originalPrice: "" },
    { id: 2, amount: "325", price: "299", bonus: "+25", popular: false, originalPrice: "349" },
    { id: 3, amount: "660", price: "579", bonus: "+60", popular: true, originalPrice: "699" },
    { id: 4, amount: "1800", price: "1499", bonus: "+200", popular: false, originalPrice: "1899" },
    { id: 5, amount: "3850", price: "2999", bonus: "+450", popular: false, originalPrice: "3999" },
    { id: 6, amount: "8100", price: "5999", bonus: "+900", popular: false, originalPrice: "7999" }
  ];

  const features = [
    { icon: "Zap", title: "Мгновенная доставка", desc: "UC приходят в течение 1-3 минут" },
    { icon: "Shield", title: "100% безопасно", desc: "Официальные методы пополнения" },
    { icon: "Clock", title: "24/7 поддержка", desc: "Всегда готовы помочь" },
    { icon: "Percent", title: "Лучшие цены", desc: "Скидки до 30% на пакеты" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/img/432d2fc7-b770-4830-837d-5a68320fffb6.jpg" 
                alt="UC Store" 
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <h1 className="font-orbitron font-bold text-xl">TATI UC 24/7</h1>
                <p className="text-xs text-muted-foreground">PUBG Mobile Store</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Telegram
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero with Order Form */}
      <section className="py-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Info */}
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                🔥 ЛУЧШИЕ ЦЕНЫ НА UC
              </Badge>
              <h2 className="font-orbitron font-bold text-4xl lg:text-5xl mb-6">
                ПОКУПКА UC
                <br />
                <span className="text-primary">ЗА СЕКУНДЫ</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Самый быстрый и надёжный способ пополнить UC для PUBG Mobile. 
                Автоматическая выдача, лучшие цены, 24/7 поддержка.
              </p>
              
              {/* Features grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-3 p-4 rounded-lg bg-card/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <Icon name={feature.icon as any} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Онлайн 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-secondary" />
                  <span>15,000+ клиентов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-secondary" />
                  <span>4.9/5 рейтинг</span>
                </div>
              </div>
            </div>

            {/* Right side - Order Form */}
            <div className="lg:sticky lg:top-24">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-orbitron text-center">
                    🎮 БЫСТРЫЙ ЗАКАЗ
                  </CardTitle>
                  <p className="text-center text-sm text-muted-foreground">
                    Заполните форму для покупки UC
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Player ID *</label>
                    <Input 
                      placeholder="Введите ваш Player ID" 
                      className="bg-background"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Найти можно в игре: Настройки → Основные
                    </p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сервер</label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Выберите сервер" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asia">Азия</SelectItem>
                        <SelectItem value="europe">Европа</SelectItem>
                        <SelectItem value="na">Северная Америка</SelectItem>
                        <SelectItem value="sa">Южная Америка</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email для чека (опционально)</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com" 
                      className="bg-background"
                    />
                  </div>

                  <Separator />

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">К оплате:</span>
                      <span className="font-orbitron font-bold text-xl text-primary">0₽</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Выберите пакет UC ниже
                    </p>
                  </div>

                  <Button className="w-full" size="lg" disabled>
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Выберите пакет UC
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* UC Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-3xl mb-4">
              ВЫБЕРИТЕ ПАКЕТ UC
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Чем больше покупаете — тем больше экономите. Все пакеты с бонусными UC!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ucPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                  pkg.popular ? 'ring-2 ring-primary shadow-primary/20' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">
                      ⭐ ХИТ ПРОДАЖ
                    </Badge>
                  </div>
                )}
                
                {pkg.originalPrice && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      -{Math.round((1 - parseInt(pkg.price) / parseInt(pkg.originalPrice)) * 100)}%
                    </Badge>
                  </div>
                )}

                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Coins" size={28} className="text-primary" />
                    </div>
                    
                    <div className="flex items-baseline justify-center space-x-2 mb-2">
                      <span className="font-orbitron font-bold text-3xl">{pkg.amount}</span>
                      <span className="text-muted-foreground">UC</span>
                    </div>
                    
                    {pkg.bonus && (
                      <div className="flex items-center justify-center space-x-2">
                        <Badge variant="outline" className="text-xs border-secondary text-secondary">
                          +{pkg.bonus} UC бонус
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      {pkg.originalPrice && (
                        <span className="text-muted-foreground line-through text-sm">
                          {pkg.originalPrice}₽
                        </span>
                      )}
                      <span className="font-orbitron font-bold text-2xl text-primary">
                        {pkg.price}₽
                      </span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="Zap" size={16} className="mr-2" />
                    Купить за {pkg.price}₽
                  </Button>
                  
                  <p className="text-xs text-muted-foreground mt-2">
                    UC придут в течение 1-3 минут
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment methods */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-4">Способы оплаты:</p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="CreditCard" size={16} />
                <span>Банковские карты</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Smartphone" size={16} />
                <span>СБП</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Wallet" size={16} />
                <span>Электронные кошельки</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="font-orbitron font-bold text-3xl text-center mb-12">
            КАК ЭТО РАБОТАЕТ?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Введите Player ID", desc: "Найдите в настройках PUBG Mobile" },
              { step: "2", title: "Выберите пакет", desc: "Подберите нужное количество UC" },
              { step: "3", title: "Оплатите", desc: "Любым удобным способом" },
              { step: "4", title: "Получите UC", desc: "Автоматически за 1-3 минуты" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-orbitron font-bold text-xl text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/img/432d2fc7-b770-4830-837d-5a68320fffb6.jpg" 
                  alt="UC Store" 
                  className="w-8 h-8 rounded"
                />
                <span className="font-orbitron font-bold text-lg">TATI UC 24/7</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Надёжный магазин UC для PUBG Mobile с мгновенной доставкой и лучшими ценами.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <div className="space-y-2 text-sm">
                <p>📞 Поддержка: 24/7</p>
                <p>⚡ Доставка: 1-3 минуты</p>
                <p>💳 Оплата: Все способы</p>
                <p>🛡️ Гарантия: 100%</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Статистика</h4>
              <div className="space-y-2 text-sm">
                <p>👥 Клиентов: 15,000+</p>
                <p>⭐ Рейтинг: 4.9/5</p>
                <p>📦 Заказов: 50,000+</p>
                <p>🎯 Точность: 99.9%</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            © 2024 TATI UC 24/7. Все права защищены. Не является офицальным партнёром PUBG Mobile.
          </div>
        </div>
      </footer>
    </div>
  );
}