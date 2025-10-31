'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from '@/components/ui/blur-fade';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Pesan Terkirim!',
          description: 'Terima kasih telah menghubungi kami. Kami akan segera merespons.',
        });
        e.currentTarget.reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      toast({
        title: 'Gagal Mengirim',
        description: 'Terjadi kesalahan. Silakan coba lagi.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Hubungi Kami
              </Badge>
            </BlurFade>
            
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Kontak
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
                Ada pertanyaan? Kami siap membantu Anda. Hubungi kami melalui formulir di bawah 
                atau kunjungi langsung sekolah kami
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: MapPin,
                title: 'Alamat',
                content: 'Jl. Pendidikan No. 123\nKota, Provinsi 12345',
                delay: 0.2,
              },
              {
                icon: Phone,
                title: 'Telepon',
                content: '(021) 1234-5678\n0812-3456-7890',
                delay: 0.3,
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'info@smkbinamandiri.sch.id\nadmin@smkbinamandiri.sch.id',
                delay: 0.4,
              },
            ].map((info, index) => (
              <BlurFade key={index} delay={info.delay} inView>
                <BackgroundGradient className="rounded-[22px] h-full">
                  <Card className="h-full border-none shadow-none bg-white dark:bg-zinc-900 text-center">
                    <CardHeader>
                      <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <info.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </BlurFade>
            ))}
          </div>

          {/* Form and Additional Info */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <BlurFade delay={0.2} inView>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                  <CardDescription>
                    Isi formulir di bawah ini dan kami akan menghubungi Anda segera
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Masukkan nama Anda"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="nama@email.com"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="08xx-xxxx-xxxx"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subjek *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        placeholder="Perihal pesan Anda"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Pesan *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tulis pesan Anda di sini..."
                        rows={5}
                        className="mt-1.5"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-secondary hover:bg-secondary/90" 
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? 'Mengirim...' : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Additional Information */}
            <div className="space-y-6">
              {/* Operating Hours */}
              <BlurFade delay={0.3} inView>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <CardTitle>Jam Operasional</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-semibold">Senin - Jumat</span>
                        <span className="text-muted-foreground">07.00 - 15.00 WIB</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-semibold">Sabtu</span>
                        <span className="text-muted-foreground">07.00 - 12.00 WIB</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-semibold">Minggu</span>
                        <span className="text-muted-foreground">Tutup</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>

              {/* Social Media */}
              <BlurFade delay={0.4} inView>
                <Card>
                  <CardHeader>
                    <CardTitle>Media Sosial</CardTitle>
                    <CardDescription>
                      Ikuti kami untuk update terbaru
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                          <Facebook className="mr-2 h-4 w-4" />
                          SMK Bina Mandiri
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                          <Instagram className="mr-2 h-4 w-4" />
                          @smkbinamandiri
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                          <Youtube className="mr-2 h-4 w-4" />
                          SMK Bina Mandiri Official
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>

              {/* Quick Info */}
              <BlurFade delay={0.5} inView>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Informasi Penting</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Pendaftaran siswa baru dibuka setiap tahun pada bulan Januari - Juni</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Kunjungan sekolah dapat dilakukan setiap hari kerja</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Konsultasi jurusan gratis untuk calon siswa</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Lokasi Kami
              </h2>
              <p className="text-muted-foreground">
                Temukan kami di peta
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border bg-muted max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <MapPin className="h-24 w-24 mx-auto text-primary/40" />
                  <p className="text-sm text-muted-foreground">
                    Google Maps embed akan ditampilkan di sini
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Jl. Pendidikan No. 123, Kota, Provinsi 12345
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
