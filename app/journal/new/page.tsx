'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { supabase } from '@/lib/supabase';
import { EntryDialog } from '@/components/entry-dialog';
import { useToast } from '@/components/hooks/use-toast';
import type { HealthEntry } from '@/lib/supabase';

export default function NewJournalPage() {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const { toast } = useToast();

  const [isDialogOpen, setIsDialogOpen] = useState(true);

  useEffect(() => {
    // Redirect unauthenticated users back to sign-in
    if (isLoaded && !user) router.push('/sign-in');
  }, [user, isLoaded, router]);

  const handleSave = async (entry: Partial<HealthEntry>) => {
    if (!user) return;

    try {
      const { error } = await supabase.from('health_entries').insert([
        {
          user_id: user.id,
          ...entry,
        },
      ]);

      if (error) throw error;

      toast({
        title: 'Success 🎉',
        description: 'Your new journal entry has been saved.',
      });

      setIsDialogOpen(false);
      router.push('/');
    } catch (err: any) {
      toast({
        title: 'Error',
        description: err.message || 'Failed to save journal entry.',
        variant: 'error',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-slate-100 p-4">
      <EntryDialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) router.push('/');
        }}
        entry={null}
        onSave={handleSave}
      />
    </div>
  );
}
