import { db } from '@/db';
import { applications } from '@/db/schema/school';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default async function ApplicationsPage() {
  const appsList = await db.select().from(applications);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Aplikasi Sekolah</h1>
          <p className="text-muted-foreground">
            Kelola daftar aplikasi yang digunakan sekolah
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/applications/new">
            <Plus className="mr-2 h-4 w-4" />
            Tambah Aplikasi
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appsList.length === 0 ? (
          <Card className="col-span-full">
            <CardContent className="text-center py-12 text-muted-foreground">
              <p>Belum ada aplikasi terdaftar.</p>
              <Button asChild className="mt-4" variant="outline">
                <Link href="/dashboard/applications/new">Tambah Aplikasi Pertama</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          appsList.map((app) => (
            <Card key={app.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {app.iconUrl && (
                    <img src={app.iconUrl} alt={app.name} className="h-6 w-6" />
                  )}
                  {app.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" />
                  {app.url}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{app.description}</p>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link href={`/dashboard/applications/${app.id}`}>Edit</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="flex-1">
                    <Link href={app.url} target="_blank">
                      Buka
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
