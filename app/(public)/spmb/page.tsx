import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, FileText, DollarSign, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SPMBPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Penerimaan Peserta Didik Baru
          </h1>
          <p className="text-lg text-muted-foreground">
            Bergabunglah dengan SMK Bina Mandiri dan wujudkan masa depan cemerlang Anda!
          </p>
        </div>

        {/* Requirements */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <CardTitle>Persyaratan Pendaftaran</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Lulusan SMP/MTs atau sederajat</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Fotocopy ijazah dan SKHUN (menyusul jika belum ada)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Fotocopy Kartu Keluarga</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Pas foto 3x4 (3 lembar)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Fotocopy Akta Kelahiran</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <CardTitle>Jadwal Pendaftaran</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <Badge className="mb-2">Gelombang 1</Badge>
                  <p className="font-semibold">Januari - Maret</p>
                </div>
                <Badge variant="secondary">Dibuka</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <Badge className="mb-2">Gelombang 2</Badge>
                  <p className="font-semibold">April - Juni</p>
                </div>
                <Badge variant="outline">Segera</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <Badge className="mb-2">Pengumuman</Badge>
                  <p className="font-semibold">Juli</p>
                </div>
                <Badge variant="outline">Menunggu</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cost */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <CardTitle>Biaya Pendaftaran</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <p className="text-3xl font-bold text-primary mb-2">Rp 200.000</p>
              <p className="text-sm text-muted-foreground">
                Sudah termasuk formulir dan tes masuk
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Siap Mendaftar?</h3>
            <p className="mb-6 opacity-90">
              Hubungi kami untuk informasi lebih lanjut atau kunjungi sekolah kami
              langsung.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/about">Tentang Sekolah</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
