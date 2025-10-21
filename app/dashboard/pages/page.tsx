import { db } from '@/db';
import { pages } from '@/db/schema/school';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export default async function PagesPage() {
  const pagesList = await db.select().from(pages);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Halaman Statis</h1>
        <p className="text-muted-foreground">
          Kelola konten halaman statis website
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {pagesList.length === 0 ? (
          <Card className="col-span-2">
            <CardContent className="text-center py-12 text-muted-foreground">
              <p>Belum ada halaman. Silakan tambahkan halaman terlebih dahulu.</p>
            </CardContent>
          </Card>
        ) : (
          pagesList.map((page) => (
            <Card key={page.id}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle>{page.title}</CardTitle>
                </div>
                <CardDescription>/{page.slug}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 line-clamp-3">{page.content}</p>
                <div className="flex gap-2">
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/dashboard/pages/${page.id}`}>Edit</Link>
                  </Button>
                  <Button asChild variant="ghost" className="flex-1">
                    <Link href={`/${page.slug}`} target="_blank">
                      Lihat
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
