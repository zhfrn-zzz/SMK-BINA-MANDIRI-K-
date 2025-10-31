import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from '@/components/ui/blur-fade';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { Briefcase, Building2, Users, TrendingUp, Award, CheckCircle, ArrowRight, Factory, Handshake } from 'lucide-react';

export default function HubinPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Hubungan Industri
              </Badge>
            </BlurFade>
            
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                HUBIN
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
                Hubungan Industri (HUBIN) - Jembatan antara pendidikan dan dunia kerja untuk 
                mempersiapkan siswa menghadapi tantangan industri modern
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.2} inView>
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border bg-muted max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <Handshake className="h-24 w-24 mx-auto text-primary/40" />
                  <p className="text-sm text-muted-foreground">
                    Kerjasama dengan industri partner
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* About HUBIN */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Tentang HUBIN
                </h2>
                <p className="text-muted-foreground text-lg">
                  Membangun sinergi antara sekolah dan industri
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Hubungan Industri (HUBIN) SMK Bina Mandiri berperan penting dalam memfasilitasi 
                    kerjasama antara sekolah dengan dunia usaha dan dunia industri (DUDI). Melalui 
                    program HUBIN, kami memastikan siswa mendapatkan pengalaman praktis yang relevan 
                    dengan kebutuhan industri.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Kami berkomitmen untuk terus memperluas jaringan kerjasama dengan berbagai 
                    perusahaan dan industri, sehingga lulusan SMK Bina Mandiri memiliki peluang 
                    yang lebih besar untuk berkarir di perusahaan-perusahaan terkemuka.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Program HUBIN
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Berbagai program untuk mempersiapkan siswa memasuki dunia kerja
              </p>
            </div>
          </BlurFade>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                icon: Briefcase,
                title: 'Praktik Kerja Lapangan (PKL)',
                description: 'Program magang di perusahaan partner untuk memberikan pengalaman kerja nyata kepada siswa',
                delay: 0.2,
              },
              {
                icon: Users,
                title: 'Kunjungan Industri',
                description: 'Kunjungan ke berbagai perusahaan untuk melihat langsung proses kerja di industri',
                delay: 0.3,
              },
              {
                icon: Award,
                title: 'Sertifikasi Kompetensi',
                description: 'Program sertifikasi untuk meningkatkan kredibilitas dan kompetensi siswa',
                delay: 0.4,
              },
              {
                icon: Building2,
                title: 'Job Fair',
                description: 'Bursa kerja khusus untuk menghubungkan lulusan dengan perusahaan yang membutuhkan',
                delay: 0.5,
              },
              {
                icon: TrendingUp,
                title: 'Pelatihan Industri',
                description: 'Pelatihan khusus dari praktisi industri untuk meningkatkan skill siswa',
                delay: 0.6,
              },
              {
                icon: Factory,
                title: 'Teaching Factory',
                description: 'Pembelajaran berbasis produksi dengan standar industri di lingkungan sekolah',
                delay: 0.7,
              },
            ].map((program, index) => (
              <BlurFade key={index} delay={program.delay} inView>
                <BackgroundGradient className="rounded-[22px] h-full">
                  <Card className="h-full border-none shadow-none bg-white dark:bg-zinc-900">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <program.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {program.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Mitra Industri Kami
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Perusahaan dan industri yang telah bekerjasama dengan SMK Bina Mandiri
              </p>
            </div>
          </BlurFade>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              { name: 'PT. Teknologi Indonesia', category: 'IT & Software', delay: 0.2 },
              { name: 'CV. Maju Motor', category: 'Otomotif', delay: 0.3 },
              { name: 'PT. Astra International', category: 'Otomotif', delay: 0.4 },
              { name: 'PT. Telkom Indonesia', category: 'Telekomunikasi', delay: 0.5 },
              { name: 'PT. Yamaha Indonesia', category: 'Otomotif', delay: 0.6 },
              { name: 'PT. Honda Prospect Motor', category: 'Otomotif', delay: 0.7 },
              { name: 'PT. Indosat Ooredoo', category: 'Telekomunikasi', delay: 0.8 },
              { name: 'PT. XL Axiata', category: 'Telekomunikasi', delay: 0.9 },
            ].map((partner, index) => (
              <BlurFade key={index} delay={partner.delay} inView>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                      <Building2 className="h-12 w-12 text-primary/40" />
                    </div>
                    <h3 className="font-semibold mb-1">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.category}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Manfaat Program HUBIN
                </h2>
              </div>
            </BlurFade>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Pengalaman kerja nyata di industri',
                'Networking dengan profesional industri',
                'Peningkatan kompetensi dan skill',
                'Sertifikasi yang diakui industri',
                'Peluang kerja setelah lulus',
                'Pemahaman budaya kerja profesional',
                'Akses ke teknologi terkini',
                'Bimbingan dari praktisi berpengalaman',
              ].map((benefit, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <Card className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 border-none text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Tertarik Bergabung?
                </h2>
                <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Dapatkan pengalaman belajar yang terhubung langsung dengan dunia industri
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="/spmb" className="group">
                      Daftar Sekarang
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/contact">Hubungi Kami</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
