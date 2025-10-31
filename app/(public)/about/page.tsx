import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from '@/components/ui/blur-fade';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { HomeParticles } from '@/components/home-particles';
import { GraduationCap, Target, Eye, Award, Users, Building2, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col relative">
      {/* Particles Background */}
      <HomeParticles />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Tentang Kami
              </Badge>
            </BlurFade>
            
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                SMK Bina Mandiri
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
                Sekolah Menengah Kejuruan yang berkomitmen menghasilkan lulusan kompeten, 
                berkarakter, dan siap bersaing di dunia kerja maupun industri
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* School Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.2} inView>
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border bg-muted max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <Building2 className="h-24 w-24 mx-auto text-primary/40" />
                  <p className="text-sm text-muted-foreground">
                    Foto gedung SMK Bina Mandiri
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <BlurFade delay={0.2} inView>
              <BackgroundGradient className="rounded-[22px] h-full">
                <Card className="h-full border-none shadow-none bg-white dark:bg-zinc-900">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Eye className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">Visi Sekolah</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Menjadi SMK unggulan yang menghasilkan lulusan kompeten, berkarakter, 
                      dan siap kerja dengan mengedepankan nilai-nilai profesionalisme dan 
                      keunggulan dalam bidang teknologi dan keterampilan.
                    </p>
                  </CardContent>
                </Card>
              </BackgroundGradient>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <BackgroundGradient className="rounded-[22px] h-full">
                <Card className="h-full border-none shadow-none bg-white dark:bg-zinc-900">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Target className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">Misi Sekolah</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Menyelenggarakan pendidikan kejuruan yang berkualitas dan relevan dengan kebutuhan industri</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Mengembangkan kerjasama dengan dunia usaha dan industri</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Membentuk karakter siswa yang berakhlak mulia dan profesional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Menyediakan fasilitas pembelajaran yang modern dan memadai</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </BackgroundGradient>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Nilai-Nilai Kami
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Prinsip yang menjadi landasan dalam setiap kegiatan di SMK Bina Mandiri
              </p>
            </div>
          </BlurFade>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: 'Profesional',
                description: 'Bekerja dengan standar tinggi dan dedikasi penuh',
                delay: 0.2,
              },
              {
                icon: Users,
                title: 'Kolaboratif',
                description: 'Membangun kerjasama yang solid dan produktif',
                delay: 0.3,
              },
              {
                icon: BookOpen,
                title: 'Inovatif',
                description: 'Terus berinovasi dalam metode pembelajaran',
                delay: 0.4,
              },
              {
                icon: TrendingUp,
                title: 'Berkembang',
                description: 'Komitmen untuk terus meningkatkan kualitas',
                delay: 0.5,
              },
            ].map((value, index) => (
              <BlurFade key={index} delay={value.delay} inView>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Sejarah Singkat
                </h2>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card>
                <CardContent className="p-8">
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      SMK Bina Mandiri didirikan dengan tujuan untuk menyediakan pendidikan kejuruan 
                      berkualitas yang dapat mempersiapkan siswa menghadapi tantangan dunia kerja. 
                      Sejak berdiri, sekolah kami telah menghasilkan ribuan lulusan yang sukses 
                      berkarir di berbagai bidang industri.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                      Dengan komitmen kuat terhadap kualitas pendidikan, SMK Bina Mandiri terus 
                      mengembangkan program-program unggulan yang disesuaikan dengan perkembangan 
                      teknologi dan kebutuhan industri modern. Kami bangga menjadi bagian dari 
                      perjalanan pendidikan siswa menuju masa depan yang cerah.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
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
                  Ingin Tahu Lebih Lanjut?
                </h2>
                <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Kunjungi sekolah kami atau hubungi tim kami untuk informasi lebih detail
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="/contact" className="group">
                      Hubungi Kami
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/spmb">Daftar Sekarang</Link>
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
