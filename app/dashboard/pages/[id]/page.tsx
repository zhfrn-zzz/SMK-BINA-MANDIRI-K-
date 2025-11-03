'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function EditPagePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [pageData, setPageData] = useState({
    title: '',
    slug: '',
    content: '',
  });

  useEffect(() => {
    let isMounted = true;

    const loadPage = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/pages/${params.id}`);

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          if (isMounted) {
            toast({
              title: 'Error',
              description: errorData?.error ?? 'Gagal memuat data halaman',
              variant: 'destructive',
            });
          }
          return;
        }

        const data = await response.json();
        if (isMounted) {
          setPageData(data);
        }
      } catch (error) {
        console.error('Error fetching page:', error);
        if (isMounted) {
          toast({
            title: 'Error',
            description: 'Gagal memuat data halaman',
            variant: 'destructive',
          });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadPage();

    return () => {
      isMounted = false;
    };
  }, [params.id, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(`/api/pages/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pageData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        toast({
          title: 'Error',
          description: errorData?.error ?? 'Gagal memperbarui halaman',
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'Berhasil',
        description: 'Halaman berhasil diperbarui',
      });
      router.push('/dashboard/pages');
    } catch (error) {
      console.error('Error updating page:', error);
      toast({
        title: 'Error',
        description: 'Gagal memperbarui halaman',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Memuat data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="/dashboard/pages">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Edit Halaman</h1>
          <p className="text-muted-foreground">
            Perbarui konten halaman statis
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informasi Halaman</CardTitle>
            <CardDescription>
              Edit judul dan konten halaman
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Judul Halaman</Label>
              <Input
                id="title"
                value={pageData.title}
                onChange={(e) => setPageData({ ...pageData, title: e.target.value })}
                required
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input
                id="slug"
                value={pageData.slug}
                disabled
                className="mt-1.5 bg-muted"
              />
              <p className="text-xs text-muted-foreground mt-1">
                URL: /{pageData.slug}
              </p>
            </div>

            <div>
              <Label htmlFor="content">Konten</Label>
              <Textarea
                id="content"
                value={pageData.content}
                onChange={(e) => setPageData({ ...pageData, content: e.target.value })}
                required
                rows={20}
                className="mt-1.5 font-mono text-sm"
                placeholder="Tulis konten halaman di sini..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                Gunakan format teks biasa. Line breaks akan dipertahankan.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" disabled={saving} className="flex-1">
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Menyimpan...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Simpan Perubahan
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/dashboard/pages')}
                disabled={saving}
              >
                Batal
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
