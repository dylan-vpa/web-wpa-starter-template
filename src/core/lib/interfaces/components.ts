// Button ----------------------------------------------------------------------
export interface ButtonProps {
    variant?: "primary" | "secondary" | "ghost";
    children?: React.ReactNode;
    onClick?: () => void;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
    pendingText?: string;
    formAction?: (formData: FormData) => void;
    [key: string]: unknown; 
  }
  
  // Input ----------------------------------------------------------------------
  export interface InputProps {
    variant?: "default" | "outline" | "ghost";
    label?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
  }

export interface FieldProps {
    name: string;
    label?: string;
    placeholder?: string;
    children: React.ReactNode;
}
