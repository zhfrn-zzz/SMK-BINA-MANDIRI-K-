import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from '@/components/ui/blur-fade';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { GraduationCap, Users, Building2, Award, ArrowRight, Monitor, Bike, Car, CheckCircle, Star } from 'lucide-react';
import { HomeParticles } from '@/components/home-particles';

export default function HomePage() {
  return (
    <div className="flex flex-col relative">
      {/* Particles Background - Only Background */}
      <HomeParticles />
      {/* Hero Section - Relivator Style with Image */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
        <div className="container relative mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6">
              <BlurFade delay={0.1} inView>
                <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                  Sekolah Menengah Kejuruan Terbaik
                </Badge>
              </BlurFade>
              
              <BlurFade delay={0.2} inView>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  SMK Bina Mandiri
                </h1>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <p className="text-lg text-muted-foreground md:text-xl max-w-xl">
                  Membangun generasi profesional dan berkarakter untuk masa depan Indonesia yang lebih baik
                </p>
              </BlurFade>

              <BlurFade delay={0.4} inView>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="group bg-secondary hover:bg-secondary/90">
                    <Link href="/spmb">
                      Daftar Sekarang
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/about">Tentang Kami</Link>
                  </Button>
                </div>
              </BlurFade>

              <BlurFade delay={0.5} inView>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-sm">Akreditasi A</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-sm">Fasilitas Modern</span>
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Right Image */}
            <BlurFade delay={0.3} inView className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <GraduationCap className="h-24 w-24 mx-auto text-primary/40" />
                    <p className="text-sm text-muted-foreground">
                      Gambar hero section sekolah
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Shop by Category Style - Departments */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Pilih Jurusan Sesuai Minatmu
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Temukan program keahlian yang tepat untuk membangun karirmu
              </p>
            </div>
          </BlurFade>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                slug: 'tkj',
                name: 'Teknik Komputer dan Jaringan',
                shortName: 'TKJ',
                icon: Monitor,
                students: '120+ Siswa',
                delay: 0.2,
              },
              {
                slug: 'tsm',
                name: 'Teknik Sepeda Motor',
                shortName: 'TSM',
                icon: Bike,
                students: '100+ Siswa',
                delay: 0.3,
              },
              {
                slug: 'tkr',
                name: 'Teknik Kendaraan Ringan',
                shortName: 'TKR',
                icon: Car,
                students: '90+ Siswa',
                delay: 0.4,
              },
            ].map((dept) => (
              <BlurFade key={dept.slug} delay={dept.delay} inView>
                <Link href={`/departments/${dept.slug}`} className="group block">
                  <Card className="h-full overflow-hidden transition-all hover:shadow-xl hover:border-primary/50">
                    {/* Image Section */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
                      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <dept.icon className="h-20 w-20 text-white/90 transition-transform group-hover:scale-110" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-primary hover:bg-white">
                          {dept.shortName}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {dept.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {dept.students}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="group/btn w-full justify-between">
                        Lihat Detail
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Mengapa Memilih SMK Bina Mandiri?
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Kami menyediakan pendidikan kejuruan terbaik dengan berbagai keunggulan
              </p>
            </div>
          </BlurFade>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: 'Pendidikan Berkualitas',
                description: 'Kurikulum yang disesuaikan dengan kebutuhan industri modern',
                delay: 0.2,
              },
              {
                icon: Users,
                title: 'Tenaga Pengajar Profesional',
                description: 'Guru dan instruktur berpengalaman di bidangnya',
                delay: 0.3,
              },
              {
                icon: Building2,
                title: 'Fasilitas Lengkap',
                description: 'Laboratorium dan bengkel praktik yang modern',
                delay: 0.4,
              },
              {
                icon: Award,
                title: 'Kerjasama Industri',
                description: 'Program PKL dan penyerapan lulusan di perusahaan terkemuka',
                delay: 0.5,
              },
            ].map((feature, index) => (
              <BlurFade key={index} delay={feature.delay} inView>
                <BackgroundGradient className="rounded-[22px] h-full" containerClassName="h-full">
                  <Card className="h-full border-none shadow-none bg-white dark:bg-zinc-900">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Siswa Aktif', value: '300+', delay: 0.1 },
              { label: 'Guru & Staff', value: '50+', delay: 0.2 },
              { label: 'Mitra Industri', value: '25+', delay: 0.3 },
              { label: 'Tingkat Kelulusan', value: '98%', delay: 0.4 },
            ].map((stat, index) => (
              <BlurFade key={index} delay={stat.delay} inView>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground md:text-base">
                    {stat.label}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Apa Kata Mereka?
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Testimoni dari siswa dan alumni SMK Bina Mandiri
              </p>
            </div>
          </BlurFade>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Ahmad Rizki',
                role: 'Alumni TKJ 2023',
                content: 'Berkat SMK Bina Mandiri, saya sekarang bekerja di perusahaan IT ternama. Ilmu yang didapat sangat applicable di dunia kerja.',
                delay: 0.2,
              },
              {
                name: 'Siti Nurhaliza',
                role: 'Siswa TSM',
                content: 'Fasilitas bengkel yang lengkap dan guru-guru yang sabar membuat saya semakin mencintai dunia otomotif.',
                delay: 0.3,
              },
              {
                name: 'Budi Santoso',
                role: 'Alumni TKR 2022',
                content: 'Program PKL di dealer resmi memberikan pengalaman berharga. Sekarang saya sudah punya bengkel sendiri!',
                delay: 0.4,
              },
            ].map((testimonial, index) => (
              <BlurFade key={index} delay={testimonial.delay} inView>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="container relative mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Siap Memulai Perjalanan Karirmu?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/90">
                Bergabunglah dengan ribuan siswa yang telah meraih kesuksesan bersama SMK Bina Mandiri
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
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
