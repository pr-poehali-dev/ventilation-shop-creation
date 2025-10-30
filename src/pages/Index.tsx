import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Приточная вентиляция',
      description: 'Система приточной вентиляции для промышленных объектов',
      price: 'от 150 000 ₽',
      image: 'https://cdn.poehali.dev/projects/130c9f8c-7c1e-4e58-8cf1-a5d986c7a4bd/files/6ac19ea5-33d1-4b73-aea2-a2f4b88466ee.jpg',
      features: ['Производительность до 5000 м³/ч', 'Низкий уровень шума', 'Энергоэффективность А++']
    },
    {
      id: 2,
      name: 'Вытяжная система',
      description: 'Промышленная вытяжная система с фильтрацией',
      price: 'от 120 000 ₽',
      image: 'https://cdn.poehali.dev/projects/130c9f8c-7c1e-4e58-8cf1-a5d986c7a4bd/files/8a51cfbd-7324-489f-b372-d036c429b474.jpg',
      features: ['Многоступенчатая фильтрация', 'Автоматическая регулировка', 'Долговечность 15+ лет']
    },
    {
      id: 3,
      name: 'Рекуператор',
      description: 'Энергосберегающий рекуператор тепла',
      price: 'от 200 000 ₽',
      image: 'https://cdn.poehali.dev/projects/130c9f8c-7c1e-4e58-8cf1-a5d986c7a4bd/files/0930a0e3-47fa-4a56-8cbc-ae10654b4140.jpg',
      features: ['Экономия до 85% энергии', 'Круглогодичная работа', 'Интеллектуальное управление']
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Wind" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-white">ВентТехно</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Главная', 'О компании', 'Товары', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === 'Главная' ? 'home' : item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === (item === 'Главная' ? 'home' : item.toLowerCase().replace(' ', '-'))
                      ? 'text-primary'
                      : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <Button className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative pt-16 min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(26, 31, 44, 0.95), rgba(26, 31, 44, 0.7)), url('https://cdn.poehali.dev/projects/130c9f8c-7c1e-4e58-8cf1-a5d986c7a4bd/files/6ac19ea5-33d1-4b73-aea2-a2f4b88466ee.jpg')`
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-6 bg-accent text-white">
              Инновационные решения
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Производство систем<br />
              <span className="text-primary">промышленной вентиляции</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Системы общеобменной вентиляции, аспирации и дымоудаления для промышленных объектов
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Наличие от 100 до 315 мм',
                'Расчет по всем формам оплаты',
                'Расходные материалы'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-accent" size={24} />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Каталог продукции
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                <Icon name="Calculator" size={20} className="mr-2" />
                Расчет стоимости
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section id="о-компании" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary">О нас</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Профессиональные решения для вентиляции
            </h2>
            <p className="text-lg text-muted-foreground">
              Более 15 лет мы специализируемся на проектировании, производстве и установке 
              систем промышленной вентиляции для крупных объектов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Award', title: '500+', description: 'Реализованных проектов', color: 'text-primary' },
              { icon: 'Users', title: '50+', description: 'Квалифицированных специалистов', color: 'text-accent' },
              { icon: 'TrendingUp', title: '98%', description: 'Довольных клиентов', color: 'text-primary' }
            ].map((stat, idx) => (
              <Card key={idx} className="text-center border-2 hover:border-primary transition-all hover:shadow-xl animate-scale-in">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={stat.icon} size={32} className={stat.color} />
                  </div>
                  <CardTitle className="text-4xl font-bold mb-2">{stat.title}</CardTitle>
                  <CardDescription className="text-base">{stat.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Target" size={40} className="text-primary mb-4" />
                <CardTitle>Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Обеспечить каждое промышленное предприятие современной, энергоэффективной 
                  системой вентиляции, которая создаёт комфортные условия труда и повышает 
                  производительность
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Zap" size={40} className="text-accent mb-4" />
                <CardTitle>Наши преимущества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Используем только проверенные технологии и материалы, предоставляем полный 
                  цикл услуг от проектирования до сервисного обслуживания, гарантируем качество 
                  на всех этапах работы
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="товары" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent">Каталог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наша продукция
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент вентиляционного оборудования для любых задач
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all group animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-white">Хит продаж</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Grid" size={20} className="mr-2" />
              Смотреть весь каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-muted-foreground">
                Ответим на все ваши вопросы и поможем подобрать оптимальное решение
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle>Оставьте заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="example@mail.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">Адрес</CardTitle>
                        <CardDescription className="text-base">
                          г. Москва, ул. Промышленная, д. 15, офис 301
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-accent" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">Телефон</CardTitle>
                        <CardDescription className="text-base">
                          +7 (495) 123-45-67<br />
                          +7 (800) 555-35-35
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">Email</CardTitle>
                        <CardDescription className="text-base">
                          info@venttehno.ru<br />
                          sales@venttehno.ru
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={24} className="text-accent" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">Режим работы</CardTitle>
                        <CardDescription className="text-base">
                          Пн-Пт: 9:00 - 18:00<br />
                          Сб-Вс: выходной
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wind" size={28} className="text-primary" />
                <span className="text-xl font-bold">ВентТехно</span>
              </div>
              <p className="text-gray-300 text-sm">
                Профессиональные решения для промышленной вентиляции
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Проекты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Вентиляция</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кондиционирование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аспирация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дымоудаление</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Следите за нами</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-300">
            <p>© 2024 ВентТехно. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;