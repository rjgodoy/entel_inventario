<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        'App\Console\Commands\UpdatePops',
        'App\Console\Commands\UpdateComsites',
        'App\Console\Commands\UpdatePsgTps',
        'App\Console\Commands\SearchRcas',
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('update:pops')
            // ->daily()
            // ->timezone('America/Santiago')
            // ->at('04:00')
            // ->emailOutputOnFailure('proyectosinfraestructura@entel.cl');
        $schedule->command('update:comsites')
            ->sundays()
            ->timezone('America/Santiago')
            ->at('02:00')
            ->emailOutputOnFailure('proyectosinfraestructura@entel.cl');
        $schedule->command('update:psg_tps')
            // ->everyMinute();
            ->daily()
            ->timezone('America/Santiago')
            ->at('01:00')
            ->emailOutputOnFailure('proyectosinfraestructura@entel.cl');
        $schedule->command('search:rcas')
            ->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
