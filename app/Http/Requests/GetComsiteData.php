<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GetComsiteData extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }

    /**
     * @var string
     */
    protected $IdContrato;

     /**
     * @var string
     */
    protected $CodSitio;

     /**
     * @var string
     */
    protected $NombreSitio;

    /**
     * @var string
     */
    protected $Operador;

    /**
     * @var string
     */
    protected $FechaInicio;

    /**
     * @var string
     */
    protected $FechaTermino;

    /**
     * @var string
     */
    protected $Propietario;

    /**
     * @var string
     */
    protected $CelularPropietario;

    /**
     * @var string
     */
    protected $TelefonoParticularPropietario;

    /**
     * @var string
     */
    protected $RolPropiedad;

    /**
     * GetConversionAmount constructor.
     *
     * @param string $IdContrato
     * @param string $CodSitio
     * @param string $NombreSitio
     * @param string $Operador
     * @param string $FechaInicio
     * @param string $FechaTermino
     * @param string $Propietario
     * @param string $CelularPropietario
     * @param string $TelefonoParticularPropietario
     * @param string $RolPropiedad
     */
    public function __construct($IdContrato, $CodSitio, $NombreSitio, $Operador, $FechaInicio, $FechaTermino, $Propietario, $CelularPropietario, $TelefonoParticularPropietario, $RolPropiedad)
    {
        $this->val01_IdContrato = $IdContrato;
        $this->val02_CodSitio = $CodSitio;
        $this->val03_NombreSitio = $NombreSitio;
        $this->val04_Operador = $Operador;    
        $this->val05_FechaInicio = $FechaInicio;    
        $this->val06_FechaTermino = $FechaTermino;    
        $this->val07_Propietario = $Propietario;    
        $this->val08_CelularPropietario = $CelularPropietario;    
        $this->val09_TelefonoParticularPropietario = $TelefonoParticularPropietario;
        $this->val10_RolPropiedad = $RolPropiedad;    
    }

    /**
     * @return string
     */
    public function getIdContrato()
    {
        return $this->val01_IdContrato;
    }

    /**
     * @return string
     */
    public function getCodSitio()
    {
        return $this->val02_CodSitio;
    }

    /**
     * @return string
     */
    public function getNombreSitio()
    {
        return $this->val03_NombreSitio;
    }

    /**
     * @return string
     */
    public function getOperador()
    {
        return $this->val04_Operador;
    }

    /**
     * @return string
     */
    public function getFechaInicio()
    {
        return $this->val05_FechaInicio;
    }

    /**
     * @return string
     */
    public function getFechaTermino()
    {
        return $this->val06_FechaTermino;
    }

    /**
     * @return string
     */
    public function getPropietario()
    {
        return $this->val07_Propietario;
    }

    /**
     * @return string
     */
    public function getCelularPropietario()
    {
        return $this->val08_CelularPropietario;
    }

    /**
     * @return string
     */
    public function getTelefonoParticularPropietario()
    {
        return $this->val09_TelefonoParticularPropietario;
    }

    /**
     * @return string
     */
    public function getRolPropiedad()
    {
        return $this->val10_RolPropiedad;
    }
}
