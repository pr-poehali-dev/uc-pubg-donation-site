import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

export default function Index() {
  const ucPackages = [
    {
      id: 1,
      amount: "60 UC",
      price: "69₽",
      bonus: "",
      popular: false,
      discount: ""
    },
    {
      id: 2,
      amount: "325 UC", 
      price: "349₽",
      bonus: "+25 UC бонус",
      popular: false,
      discount: ""
    },
    {
      id: 3,
      amount: "660 UC",
      price: "699₽", 
      bonus: "+60 UC бонус",
      popular: true,
      discount: "-15%"
    },
    {
      id: 4,
      amount: "1800 UC",
      price: "1899₽",
      bonus: "+200 UC бонус", 
      popular: false,
      discount: "-20%"
    },
    {
      id: 5,
      amount: "3850 UC",
      price: "3999₽",
      bonus: "+450 UC бонус",
      popular: false,
      discount: "-25%"
    },
    {
      id: 6,
      amount: "8100 UC",
      price: "7999₽",
      bonus: "+900 UC бонус",
      popular: false, 
      discount: "-30%"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Дмитрий К.",
      text: "Мгновенная доставка UC! Покупаю здесь уже полгода, всё отлично работает.",
      rating: 5,
      verified: true
    },
    {
      id: 2,
      name: "Анна С.", 
      text: "Самые лучшие цены на UC! Автовыдача реально за секунды приходит.",
      rating: 5,
      verified: true
    },
    {
      id: 3,
      name: "Максим В.",
      text: "Покупал большой пакет, всё пришло моментально. Рекомендую!",
      rating: 5,
      verified: true
    }
  ];

  const faqItems = [
    {
      question: "Как быстро приходит UC после оплаты?",
      answer: "UC приходит автоматически в течение 1-5 минут после подтверждения платежа. Никого ждать не нужно!"
    },
    {
      question: "Какие способы оплаты доступны?",
      answer: "Принимаем карты, СБП, Qiwi, Яндекс.Деньги, WebMoney и другие популярные методы оплаты."
    },
    {
      question: "Безопасно ли покупать UC здесь?",
      answer: "Абсолютно безопасно! Мы используем официальные методы пополнения через магазин игры."
    },
    {
      question: "Что делать если UC не пришел?",
      answer: "Обратитесь в поддержку с номером заказа. Мы решаем любые вопросы в течение 15 минут."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-orbitron font-bold text-sm">UC</span>
              </div>
              <span className="font-orbitron font-bold text-xl">PUBG UC STORE</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="font-roboto">
                <Icon name="Headphones" size={16} className="mr-2" />
                Поддержка
              </Button>
              <Button variant="ghost" size="sm" className="font-roboto">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground font-roboto">
                ⚡ АВТОМАТИЧЕСКАЯ ВЫДАЧА
              </Badge>
              <h1 className="font-orbitron font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ПОКУПКА UC
                <br />
                ЗА СЕКУНДЫ
              </h1>
              <p className="font-roboto text-lg mb-8 text-muted-foreground">
                Мгновенное пополнение UC для PUBG Mobile. Без ожидания, без комиссий. 
                Самые выгодные цены и моментальная доставка!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-roboto font-medium">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Купить UC сейчас
                </Button>
                <Button variant="outline" size="lg" className="font-roboto font-medium">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
              <div className="flex items-center space-x-8 mt-8">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={20} className="text-secondary" />
                  <span className="font-roboto text-sm">100% Безопасно</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-secondary" />
                  <span className="font-roboto text-sm">1-5 минут</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={20} className="text-secondary" />
                  <span className="font-roboto text-sm">5000+ отзывов</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/97d5651a-3e48-4a82-8b21-c68d201921fb.jpg"
                alt="PUBG Character"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-orbitron font-bold">
                ТОПОВЫЕ ЦЕНЫ!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UC Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-4">
              ПАКЕТЫ UC
            </h2>
            <p className="font-roboto text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите подходящий пакет UC. Чем больше покупаете - тем больше бонусов получаете!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ucPackages.map((pkg) => (
              <Card key={pkg.id} className={`relative transition-all duration-300 hover:scale-105 ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground font-roboto font-medium">
                    🔥 ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                {pkg.discount && (
                  <Badge className="absolute -top-3 right-4 bg-secondary text-secondary-foreground font-roboto font-medium">
                    {pkg.discount}
                  </Badge>
                )}
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Coins" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-orbitron font-bold text-2xl mb-2">{pkg.amount}</h3>
                    {pkg.bonus && (
                      <p className="font-roboto text-secondary text-sm font-medium">{pkg.bonus}</p>
                    )}
                  </div>
                  <div className="mb-6">
                    <span className="font-orbitron font-bold text-3xl text-primary">{pkg.price}</span>
                  </div>
                  <Button className="w-full font-roboto font-medium" size="lg">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-card border rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-orbitron font-bold text-xl mb-4">🚀 КАК КУПИТЬ UC?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm font-roboto">
                <div className="flex items-center space-x-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</span>
                  <span>Выберите пакет</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</span>
                  <span>Укажите Player ID</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</span>
                  <span>Оплатите и получите UC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-4">
              ОТЗЫВЫ ИГРОКОВ
            </h2>
            <p className="font-roboto text-muted-foreground text-lg">
              Более 5000 довольных клиентов уже покупают UC у нас
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-roboto font-medium">{review.name}</h4>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs font-roboto">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Проверенная покупка
                        </Badge>
                      )}
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-secondary fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="font-roboto text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-4">
              ЧАСТЫЕ ВОПРОСЫ
            </h2>
            <p className="font-roboto text-muted-foreground text-lg">
              Ответы на самые популярные вопросы о покупке UC
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-roboto font-medium text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-roboto text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-orbitron font-bold text-sm">UC</span>
                </div>
                <span className="font-orbitron font-bold text-xl">PUBG UC STORE</span>
              </div>
              <p className="font-roboto text-sm text-muted-foreground">
                Надежный магазин UC для PUBG Mobile с автоматической выдачей и лучшими ценами.
              </p>
            </div>
            <div>
              <h4 className="font-orbitron font-bold mb-4">Покупка</h4>
              <div className="space-y-2 font-roboto text-sm">
                <a href="#" className="block hover:text-primary transition-colors">Пакеты UC</a>
                <a href="#" className="block hover:text-primary transition-colors">Способы оплаты</a>
                <a href="#" className="block hover:text-primary transition-colors">Как купить</a>
              </div>
            </div>
            <div>
              <h4 className="font-orbitron font-bold mb-4">Поддержка</h4>
              <div className="space-y-2 font-roboto text-sm">
                <a href="#" className="block hover:text-primary transition-colors">FAQ</a>
                <a href="#" className="block hover:text-primary transition-colors">Контакты</a>
                <a href="#" className="block hover:text-primary transition-colors">Telegram</a>
              </div>
            </div>
            <div>
              <h4 className="font-orbitron font-bold mb-4">Контакты</h4>
              <div className="space-y-2 font-roboto text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>24/7 поддержка</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>Telegram: @pubgucstore</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>support@pubguc.ru</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center font-roboto text-sm text-muted-foreground">
            © 2024 PUBG UC Store. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}