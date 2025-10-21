import { Card, CardContent } from '@/components/ui/card';
import { HeadmasterImage } from '@/components/headmaster-image';

export default function HeadmasterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Sambutan Kepala Sekolah</h1>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        {/* Headmaster Profile */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="relative aspect-[3/4] w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg">
                  <HeadmasterImage />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-bold text-xl">Drs. H. Ahmad Suryadi, M.Pd</h3>
                  <p className="text-muted-foreground">Kepala Sekolah</p>
                  <p className="text-sm text-muted-foreground">SMK Bina Mandiri</p>
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2 space-y-4">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed">
                    <span className="text-4xl text-primary font-serif float-left mr-2 leading-none">&ldquo;</span>
                    Assalamu&apos;alaikum Warahmatullahi Wabarakatuh,
                  </p>

                  <p className="leading-relaxed">
                    Puji syukur kita panjatkan kehadirat Allah SWT yang telah memberikan rahmat dan karunia-Nya kepada kita semua. Shalawat serta salam semoga senantiasa tercurah kepada Nabi Muhammad SAW, keluarga, sahabat, dan para pengikutnya hingga akhir zaman.
                  </p>

                  <p className="leading-relaxed">
                    Selamat datang di website resmi SMK Bina Mandiri. Melalui website ini, kami berharap dapat memberikan informasi yang lengkap dan akurat mengenai profil sekolah, program keahlian, kegiatan pembelajaran, prestasi siswa, dan berbagai informasi penting lainnya.
                  </p>

                  <p className="leading-relaxed">
                    SMK Bina Mandiri berkomitmen untuk menghasilkan lulusan yang kompeten, berkarakter, dan siap bersaing di dunia kerja maupun melanjutkan pendidikan ke jenjang yang lebih tinggi. Kami terus berupaya meningkatkan kualitas pendidikan melalui pengembangan kurikulum yang relevan dengan kebutuhan industri, peningkatan kompetensi guru, dan penyediaan fasilitas pembelajaran yang memadai.
                  </p>

                  <p className="leading-relaxed">
                    Kami mengajak seluruh stakeholder pendidikan - orang tua, siswa, guru, karyawan, dunia usaha dan industri, serta masyarakat - untuk bersama-sama membangun SMK Bina Mandiri menjadi sekolah yang unggul dan berprestasi.
                  </p>

                  <p className="leading-relaxed">
                    Kepada para calon siswa baru, kami mengundang Anda untuk bergabung bersama kami dan menjadi bagian dari keluarga besar SMK Bina Mandiri. Mari bersama-sama kita wujudkan cita-cita dan masa depan yang gemilang.
                  </p>

                  <p className="leading-relaxed">
                    Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh.
                  </p>

                  <div className="mt-8 not-prose">
                    <p className="font-semibold">Drs. H. Ahmad Suryadi, M.Pd</p>
                    <p className="text-muted-foreground">Kepala Sekolah SMK Bina Mandiri</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Visi Kepala Sekolah</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mewujudkan SMK Bina Mandiri sebagai lembaga pendidikan vokasi yang unggul, inovatif, dan berkarakter, menghasilkan lulusan yang kompeten dan siap bersaing di era global.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Misi Kepala Sekolah</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Meningkatkan kualitas pembelajaran berbasis industri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mengembangkan karakter siswa yang berakhlak mulia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Memperkuat kerjasama dengan dunia usaha dan industri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Meningkatkan kompetensi dan profesionalisme guru</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
