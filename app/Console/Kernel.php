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
        'App\Console\Commands\UpdateCells',
        'App\Console\Commands\UpdatePops',
        'App\Console\Commands\UpdateComsites',
        'App\Console\Commands\UpdatePsgTps',
        'App\Console\Commands\SearchRcas',
        'App\Console\Commands\GetOTMaintances',
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('search:rcas')
            ->everyMinute();

        $schedule->command('update:psg_tps')
            ->daily()
            ->timezone('America/Santiago')
            ->at('00:00')
            ->emailOutputOnFailure('proyectosinfraestructura@entel.cl');

        $schedule->command('get:otmaintances')
            ->daily()
            ->timezone('America/Santiago')
            ->at('11:00')
            ->emailOutputOnFailure('proyectosinfraestructura@entel.cl');

        $schedule->command('update:comsites')
            ->sundays()
            ->timezone('America/Santiago')
            ->at('00:30'); // Siempre falla en el primer intento. Por eso hay un segundo intento.
        $schedule->command('update:comsites')
            ->sundays()
            ->timezone('America/Santiago')
            ->at('00:45')
            ->emailOutputOnFailure('proyectosinfraestructura@entel.cl');

        $schedule->command('update:cells')
            ->daily()
            ->timezone('America/Santiago')
            ->at('01:00')
            ->emailOutputOnFailure('proyectosinfraestructura@entel.cl');
        $schedule->command('update:pops')
            ->daily()
            ->timezone('America/Santiago')
            ->at('04:30')
            ->emailOutputOnFailure('proyectosinfraestructura@entel.cl');
        $schedule->command('update:pop_resume')
            ->daily()
            ->timezone('America/Santiago')
            ->at('07:00')
            ->emailOutputOnFailure('proyectosinfraestructura@entel.cl');
        
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
